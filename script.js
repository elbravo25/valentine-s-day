document.addEventListener("DOMContentLoaded", () => {
    const yesButtons = document.querySelectorAll(".yes_button"); // Select both "Yes" buttons
    const messageDiv = document.getElementById("message");

    // Function to show the message with fade-in effect
    const showMessage = () => {
        messageDiv.textContent = "Yay! I love you so much! See you this Valentine's Day!";
        messageDiv.classList.remove("hidden");  // Show the message
        messageDiv.classList.add("show"); // Apply fade-in effect
    };

    // Add event listeners to both buttons
    yesButtons.forEach(button => {
        button.addEventListener("click", showMessage);
    });
});
