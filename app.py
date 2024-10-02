from flask import Flask, render_template, request, send_file, jsonify
import os
import zipfile
from urllib.parse import quote  # Import for URL encoding

app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'
EXTRACT_FOLDER = 'extracted'

# Ensure upload and extract directories exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(EXTRACT_FOLDER, exist_ok=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    if file:
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(file_path)

        # Extract files from the uploaded zip
        extracted_files = []
        with zipfile.ZipFile(file_path, 'r') as zip_ref:
            zip_ref.extractall(EXTRACT_FOLDER)
            extracted_files = zip_ref.namelist()

        # Return list of extracted files as JSON
        return jsonify({'files': extracted_files})

@app.route('/download/<path:filename>')  # <path:filename> allows subdirectory paths
def download_file(filename):
    # Decode the filename from the URL
    file_path = os.path.join(EXTRACT_FOLDER, filename)
    
    # Check if file exists
    if os.path.exists(file_path):
        return send_file(file_path, as_attachment=True)
    else:
        return "File not found", 404

if __name__ == '__main__':
    app.run(debug=True)
