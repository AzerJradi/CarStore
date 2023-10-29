// Add this JavaScript code to your main.js file

document.querySelectorAll(".fvrt-button").forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("clicked");
    });
});
