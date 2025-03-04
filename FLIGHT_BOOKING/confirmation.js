document.addEventListener("DOMContentLoaded", function () {
    let bookingList = document.getElementById("booking-list");

    // Fetch stored booking details
    let bookingDetails = JSON.parse(localStorage.getItem("bookings")) || [];

    console.log("Loaded bookings:", bookingDetails); // Debugging

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
                    <button class="update-btn" onclick="editBooking(${index})">Update</button>
                    <button class="delete-btn" onclick="deleteBooking(${index})">Delete</button>
                </td>
            `;
            bookingList.appendChild(row);
        });
    }

    renderTable(); // Call function to display data

    window.editBooking = (index) => {
        console.log("Editing booking at index:", index);
        let booking = bookingDetails[index];
        let row = bookingList.children[index]; // Get the row to edit

        row.innerHTML = `
            <td><input type="text" id="edit-name-${index}" value="${booking.name}" required></td>
            <td><input type="email" id="edit-email-${index}" value="${booking.email}" required></td>
            <td><input type="text" id="edit-departure-${index}" value="${booking.departure}" required></td>
            <td><input type="text" id="edit-destination-${index}" value="${booking.destination}" required></td>
            <td><input type="date" id="edit-date-${index}" value="${booking.date}" required></td>
            <td>
                <select id="edit-class-${index}">
                    <option value="Economy" ${booking.flightClass === "Economy" ? "selected" : ""}>Economy</option>
                    <option value="Business" ${booking.flightClass === "Business" ? "selected" : ""}>Business</option>
                    <option value="First Class" ${booking.flightClass === "First Class" ? "selected" : ""}>First Class</option>
                </select>
            </td>
            <td>
                <button class="save-btn" onclick="saveBooking(${index})">Save</button>
                <button class="cancel-btn" onclick="renderTable()">Cancel</button>
            </td>
        `;
    };

    window.saveBooking = (index) => {
        let updatedBooking = {
            name: document.getElementById(`edit-name-${index}`).value.trim(),
            email: document.getElementById(`edit-email-${index}`).value.trim(),
            departure: document.getElementById(`edit-departure-${index}`).value.trim(),
            destination: document.getElementById(`edit-destination-${index}`).value.trim(),
            date: document.getElementById(`edit-date-${index}`).value,
            flightClass: document.getElementById(`edit-class-${index}`).value
        };

        if (!updatedBooking.name || !updatedBooking.email || !updatedBooking.departure || !updatedBooking.destination || !updatedBooking.date) {
            Swal.fire("Error", "All fields are required!", "error");
            return;
        }

        bookingDetails[index] = updatedBooking;
        localStorage.setItem("bookings", JSON.stringify(bookingDetails));

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Booking Updated Successfully",
            showConfirmButton: false,
            timer: 1500
        });

        renderTable();
    };

    window.deleteBooking = (index) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                bookingDetails.splice(index, 1);
                localStorage.setItem("bookings", JSON.stringify(bookingDetails));
                
                Swal.fire("Deleted!", "Your booking has been deleted.", "success");
                renderTable();
            }
        });
    };
});
// function clearAllBookings() {
//     Swal.fire({
//         title: "Are you sure?",
//         text: "This will delete all bookings permanently!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#d33",
//         cancelButtonColor: "#3085d6",
//         confirmButtonText: "Yes, delete all!"
//     }).then((result) => {
//         if (result.isConfirmed) {
//             localStorage.removeItem("bookings"); // Remove all saved bookings
//             Swal.fire("Deleted!", "All bookings have been removed.", "success").then(() => {
//                 location.reload(); // Refresh the page to update UI
//             });
//         }
//     });
// }
