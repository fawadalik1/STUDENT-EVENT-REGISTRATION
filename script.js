
const form = document.getElementById("eventForm");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const eventName = document.getElementById("eventChoice").value;

    if (name === "" || email === "" || eventName === "") {
        feedback.textContent = "Please complete all required fields.";
        feedback.className = "alert alert-danger mt-3";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        feedback.textContent = "Please enter a valid email address.";
        feedback.className = "alert alert-danger mt-3";
        return;
    }

    feedback.textContent =
        "Welcome, " + name + "! You selected " + eventName + ".";
    feedback.className = "alert alert-success mt-3";
});

// Change the card background using JavaScript
document.getElementById("colorButton").addEventListener("click", function () {
    document.querySelector(".event-card").classList.toggle("color-theme");
});
