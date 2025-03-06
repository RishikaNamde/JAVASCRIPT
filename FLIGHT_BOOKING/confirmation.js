document.addEventListener("DOMContentLoaded", function () {
    let bookingList = document.getElementById("booking-list");

    // Fetch stored booking details
    let bookingDetails = JSON.parse(localStorage.getItem("bookings")) || [];

    function renderTable() {
        bookingList.innerHTML = ""; // Clear previous data

        if (bookingDetails.length === 0) {
            bookingList.innerHTML = `<tr><td colspan="7">No bookings available</td></tr>`;
            return;
        }

        bookingDetails.forEach((booking, index) => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${booking.name}</td>
                <td>${booking.email}</td>
                <td>${booking.departure}</td>
                <td>${booking.destination}</td>
                <td>${booking.date}</td>
                <td>${booking.flightClass}</td>
                <td>
                    <button class="update-btn" onclick="updateBooking(${index})">Update</button>
                    <button class="delete-btn" onclick="confirmDelete(${index})">Delete</button>
                </td>
            `;
            bookingList.appendChild(row);
        });
    }

    renderTable();

    // Function to update a booking
    window.updateBooking = (index) => {
        let booking = bookingDetails[index];

        Swal.fire({
            title: "Update Booking",
            html: `
                <input id="swal-name" class="swal2-input" placeholder="Full Name" value="${booking.name}">
                <input id="swal-email" class="swal2-input" placeholder="Email" value="${booking.email}">
                <input id="swal-departure" class="swal2-input" placeholder="Departure" value="${booking.departure}">
                <input id="swal-destination" class="swal2-input" placeholder="Destination" value="${booking.destination}">
                <input id="swal-date" class="swal2-input" type="date" value="${booking.date}">
                <input id="swal-class" class="swal2-input" placeholder="Class" value="${booking.flightClass}">
            `,
            showCancelButton: true,
            confirmButtonText: "Update",
            preConfirm: () => {
                return {
                    name: document.getElementById("swal-name").value,
                    email: document.getElementById("swal-email").value,
                    departure: document.getElementById("swal-departure").value,
                    destination: document.getElementById("swal-destination").value,
                    date: document.getElementById("swal-date").value,
                    flightClass: document.getElementById("swal-class").value
                };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                bookingDetails[index] = result.value;
                localStorage.setItem("bookings", JSON.stringify(bookingDetails));
                Swal.fire("Updated!", "Your booking has been updated.", "success");
                renderTable();
            }
        });
    };

    window.confirmDelete = (index) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteBooking(index);
            }
        });
    };

    window.deleteBooking = (index) => {
        bookingDetails.splice(index, 1);
        localStorage.setItem("bookings", JSON.stringify(bookingDetails));
        renderTable();
        Swal.fire("Deleted!", "Your booking has been deleted.", "success");
    };

    window.searchBookings = () => {
        let searchTerm = document.getElementById("search-box").value.toLowerCase();
        document.querySelectorAll("#booking-list tr").forEach(row => {
            row.style.display = row.innerText.toLowerCase().includes(searchTerm) ? "" : "none";
        });
    };
});
