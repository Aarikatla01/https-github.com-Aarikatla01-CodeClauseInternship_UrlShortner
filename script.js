const shortenButton = document.getElementById("shortenButton");
const originalUrlInput = document.getElementById("originalUrl");
const shortenedUrlElement = document.getElementById("shortenedUrl");

shortenButton.addEventListener("click", shortenUrl);

function shortenUrl() {
    const originalUrl = originalUrlInput.value;
    if (!originalUrl) {
        return;
    }

    // You can replace this with your actual URL shortening logic or API call
    const shortenedUrl = "http://shortened-url.com/abcd123";
    
    shortenedUrlElement.textContent = `Shortened URL: ${shortenedUrl}`;
}
