$(document).ready(function () {
    // Show the selected file name
    $('#file').change(function (e) {
        var fileName = e.target.files[0].name;
        $('.custom-file-label').text(fileName);  // Display selected file name
    });

    // Handle form submission for file upload and extraction
    $('#upload-form').submit(function (e) {
        e.preventDefault();
        var formData = new FormData(this);
        $('.progress').show();

        $.ajax({
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener('progress', function(e) {
                    if (e.lengthComputable) {
                        var percentComplete = Math.round((e.loaded / e.total) * 100);
                        $('.progress-bar').width(percentComplete + '%').text(percentComplete + '%');
                    }
                }, false);
                return xhr;
            },
            url: '/upload',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function (response) {
                $('.progress-bar').text('Extraction Complete');
                displayFiles(response.files);
            },
            error: function() {
                alert('Upload failed.');
            }
        });
    });

    // Display the extracted files
    function displayFiles(files) {
        var fileList = $('#file-list ul');
        fileList.empty();
        files.forEach(function(file) {
            var fileType = file.split('.').pop();
            var iconClass = getFileIcon(fileType);
            fileList.append(`<li class="list-group-item">
                <i class="${iconClass}"></i> ${file} 
                <a href="/download/${file}" class="btn btn-sm btn-outline-secondary float-right">Download</a>
            </li>`);
        });
        $('#file-list').show();
    }

    // Font Awesome icon for file type
    function getFileIcon(fileType) {
        var icons = {
            'json': 'fa-solid fa-file-code',
            'crt': 'fa-solid fa-file-certificate',
            'html': 'fa-solid fa-file-code',
            'zip': 'fa-solid fa-file-zipper',
            'docx': 'fa-solid fa-file-word',
            'txt': 'fa-solid fa-file-alt',
            'jar': 'fa-solid fa-file-archive',
            // Add more file types as needed
        };
        return icons[fileType] || 'fa-solid fa-file';
    }
});
