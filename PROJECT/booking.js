document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".booking-form form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let departure = document.getElementById("departure").value.trim();
        let destination = document.getElementById("destination").value.trim();
        let date = document.getElementById("date").value;
        let flightClass = document.getElementById("class").value;

        // Simple validation
        if (!name || !email || !departure || !destination || !date || !flightClass) {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Simulate successful booking confirmation
        alert(`🎉 Booking Confirmed!\n\nName: ${name}\nEmail: ${email}\nFrom: ${departure}\nTo: ${destination}\nDate: ${date}\nClass: ${flightClass}`);

        form.reset(); // Clear form after successful submission
    });

    // Email validation function
    function validateEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
