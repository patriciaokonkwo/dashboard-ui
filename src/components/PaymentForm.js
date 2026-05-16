// Updated error handling logic to ensure announcements are made to screen readers.
function handleError(error) {
    const errorDiv = document.getElementById('error-announcement');
    errorDiv.textContent = error;
    errorDiv.setAttribute('role', 'alert');
    errorDiv.style.display = 'block';
}