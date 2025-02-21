document.getElementById("gift-box").addEventListener("click", function() {
    this.style.display = "none"; // Hide the gift box
    let heartContainer = document.getElementById("heart-container");
    let heart = document.getElementById("heart");
    let passwordPopup = document.getElementById("password-popup");

    heartContainer.classList.remove("hidden"); // Show the heart

    // Show password popup after the third beat (1.8s animation duration)
    setTimeout(() => {
        passwordPopup.classList.remove("hidden");
    }, 1800);
});

// Handle password input
document.getElementById("submit-password").addEventListener("click", function() {
    let passwordInput = document.getElementById("password-input").value;
    let letter = document.getElementById("letter");
    let passwordPopup = document.getElementById("password-popup");
    let heartContainer = document.getElementById("heart-container");

    if (passwordInput === "7x1") {
        passwordPopup.classList.add("hidden"); // Hide popup
        heartContainer.classList.add("hidden"); // Remove heart
        letter.classList.remove("hidden"); // Reveal letter
    } else {
        alert("Wrong password! Try again.");
    }
});
