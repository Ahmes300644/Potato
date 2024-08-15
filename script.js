
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let formData = new FormData();
    formData.append('image', document.getElementById('imageUpload').files[0]);

    
    fetch('/classify_image', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        
        document.getElementById('resultText').textContent = `Predicted Emotion: ${data.emotion}`;
        document.getElementById('classifiedImage').src = data.image_url;
        document.getElementById('classifiedImage').style.display = 'block';
    })
    .catch(error => console.error('Error:', error));
});
