// Get the textarea element
const textarea = document.getElementById("text_area");

// Add an event listener for keypress events
textarea.addEventListener("keypress", function (event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent new line in the textarea
        window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=37UlJj77bmGT_cPH"; // Redirect to YouTube
    }
    textarea.style.border = "none";
});


