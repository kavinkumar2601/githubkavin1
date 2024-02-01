document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var destination = document.getElementById('destination').value;
    var seats = document.getElementById('seats').value;

    if (name === '' || destination === '' || seats === '') {
        alert('Please fill in all fields');
        return false;
    }

    var ticketDetails = document.getElementById('ticketDetails');
    ticketDetails.innerHTML = '<h2>Ticket Details</h2>' +
                              '<p><strong>Name:</strong> ' + name + '</p>' +
                              '<p><strong>Destination:</strong> ' + destination + '</p>' +
                              '<p><strong>Number of Seats:</strong> ' + seats + '</p>';
});
