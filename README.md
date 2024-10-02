# **Zip File Extractor with Progress Bar and File Icons**

This project is a **web-based application** built using **Flask**, designed to allow users to **upload ZIP files, extract them, and download the extracted files**. The application comes with a **progress bar** to visualize the upload and extraction process and also features **download buttons** for individual files, as well as a **"Download All"** option to download everything at once in a ZIP file. Each extracted file is displayed with a relevant **icon** to improve the user experience.

---

## **Features**

- **Upload ZIP files** easily via a friendly UI.
- **Progress bar** to track the upload and extraction process in real time.
- **File icons** based on file types to make file identification easier.
- **Download buttons** for each file and a **"Download All"** option for convenience.
- A clean and simple user interface built with **Bootstrap** for a modern look.

---

## **Installation**

Follow the steps below to set up and run this project on your local machine:

### 1. **Clone the Repository**

Start by cloning the project repository to your local machine:

```bash
git clone https://github.com/yourusername/Zip-File-Extractor-Final.git
cd Zip-File-Extractor-Final
```

### 2. **Install Dependencies**

You will need to install the required dependencies to run the Flask app. You can do this using `pip`:

```bash
pip install -r requirements.txt
```

Ensure that the **Flask** and **ZipFile** packages are installed along with other dependencies specified in `requirements.txt`.

### 3. **Run the Flask App**

Once dependencies are installed, run the Flask application using the following command:

```bash
python app.py
```

The app will start running locally on `http://127.0.0.1:5000/`.

---

## **How to Use the Application**

### **Step 1: Upload a ZIP File**

1. Open your browser and navigate to `http://127.0.0.1:5000/`.
2. Click on the **"Choose File"** button to select the ZIP file you want to upload.
3. Press the **"Upload and Extract"** button to upload and begin the extraction process.

![image](https://github.com/user-attachments/assets/ae01639d-8846-47b9-bbf5-e424b76eee5d)


### **Step 2: View Progress**

- A **progress bar** will appear to show the upload and extraction process in real time.
- Once extraction is complete, a list of the extracted files will be displayed.

![image](https://github.com/user-attachments/assets/97721701-ad70-4494-ae74-b29635bceac9)


### **Step 3: Download Extracted Files**

- You can **download individual files** by clicking the **"Download"** button next to each file.
- Alternatively, click the **"Download All"** button to download all extracted files in a single ZIP file.

---

## **Customization**

### **Adding Custom Icons**

- The project uses file-type-specific icons to represent the extracted files. To customize these icons:
  1. Replace the URLs in the JavaScript section of the `index.html` file that point to the icons.
  2. You can find free icons from resources like [FlatIcon](https://www.flaticon.com) or [IconFinder](https://www.iconfinder.com).

### **Improving the UI**

- The project uses **Bootstrap 4** for styling. You can easily enhance the design by modifying the HTML or CSS in the `index.html` file.
- You can replace the background or other visual elements with free images from [Unsplash](https://unsplash.com).

---

## **Directory Structure**

```bash
.
project/
├── templates/
│   └── index.html
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
├── uploads/
├── extracted/
├── app.py
└── requirements.txt

```

---

## **Requirements**

- **Python 3.6+**
- **Flask**
- **ZipFile** (for handling ZIP file extraction)
- **Bootstrap** (for UI styling)
- **jQuery** (for handling AJAX and progress bar functionality)

All dependencies are listed in the `requirements.txt` file.

---

## **Future Enhancements**

Here are some potential future improvements that could be added to this project:

- **Support for nested ZIP files** (ZIP files within ZIPs).
- **User authentication** for secure file uploads.
- **Multiple file uploads** at once.
- **File type filtering** to extract only specific types of files (e.g., PDFs or images).
- **Drag and drop** functionality for file uploads.

---

## **Contributing**

Contributions are welcome! Feel free to fork this repository, submit issues, or make pull requests to improve the project.

---

## **License**

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

---

## **Acknowledgements**

- Icons sourced from [FlatIcon](https://www.flaticon.com) or [IconFinder](https://www.iconfinder.com).
- Progress bar and file upload functionality built using **jQuery** and **Bootstrap**.

---
