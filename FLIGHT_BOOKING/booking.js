document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("bookingForm");

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
            Swal.fire("Error", "Please fill in all fields.", "error");
            return;
        }

        // Save booking details to localStorage
        let bookingData = {
            name: name,
            email: email,
            departure: departure,
            destination: destination,
            date: date,
            flightClass: flightClass
        };

        let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
        bookings.push(bookingData);
        localStorage.setItem("bookings", JSON.stringify(bookings));

        // Redirect to confirmation page **IMMEDIATELY**
        window.location.href = "confirmation.html";
    });
});

