document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("bookingForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let departure = document.getElementById("departure").value.trim();
        let destination = document.getElementById("destination").value.trim();
        let date = document.getElementById("date").value;
        let flightClass = document.getElementById("class").value;

        if (!name || !email || !departure || !destination || !date || !flightClass) {
            Swal.fire("Error", "Please fill in all fields.", "error");
            return;
        }

        let bookingData = {
            name,
            email,
            departure,
            destination,
            date,
            flightClass
        };

        let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
        bookings.push(bookingData);
        localStorage.setItem("bookings", JSON.stringify(bookings));

        Swal.fire({
            icon: "success",
            title: "Booking Confirmed",
            text: "Your flight has been booked successfully!",
        }).then(() => {
            window.location.href = "confirmation.html";
        });
    });
});

let booknow = () => {
    if (localStorage.getItem("loggedInUser")) {
        location.href = "booknow.html";
    } else {
        Swal.fire({
            icon: "warning",
            title: "Login Required",
            text: "Please login first to proceed with booking.",
            confirmButtonText: "Go to Login"
        }).then(() => {
            location.href = "FLIGHT_BOOKING/login.html";
        });
    }
};
