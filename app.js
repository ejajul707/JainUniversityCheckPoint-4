
document.addEventListener("DOMContentLoaded", function () {
  let today = new Date().toISOString().split('T')[0];

  document.getElementById("startDate").setAttribute("min", today);
  document.getElementById("endDate").setAttribute("min", today);

  document.getElementById("startDate").addEventListener("change", function () {
    let startDate = this.value;
    let endDateField = document.getElementById("endDate");

    if (endDateField.value < startDate) {
      endDateField.value = "";
    }

    endDateField.setAttribute("min", startDate);
  });
});

function validateForm() {
  let destination = document.getElementById("destination").value;
  let persons = document.getElementById("persons").value;
  let startDate = document.getElementById("startDate").value;
  let endDate = document.getElementById("endDate").value;
  let description = document.getElementById("description").value;

  if (destination === "") {
    alert("Please select a destination.");
    return;
  }
  if (persons === "" || persons < 1) {
    alert("Please enter the number of persons (minimum 1).");
    return;
  }
  if (startDate === "") {
    alert("Please select a start date.");
    return;
  }
  if (endDate === "") {
    alert("Please select an end date.");
    return;
  }
  if (endDate < startDate) {
    alert("End date cannot be before the start date.");
    return;
  }
  if (description.length < 50) {
    alert("Description must be at least 50 characters.");
    return;
  }

  alert("Booking successful!");
}
