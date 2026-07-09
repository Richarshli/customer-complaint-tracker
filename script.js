function addComplaint() {
  const customerName = document.getElementById("customerName").value;
  const complaintType = document.getElementById("complaintType").value;
  const priority = document.getElementById("priority").value;
  const status = document.getElementById("status").value;
  const notes = document.getElementById("notes").value;

  const table = document.getElementById("complaintTable");
  const row = table.insertRow();

  row.insertCell(0).innerText = customerName;
  row.insertCell(1).innerText = complaintType;
  row.insertCell(2).innerText = priority;
  row.insertCell(3).innerText = status;
  row.insertCell(4).innerText = notes;

  document.getElementById("customerName").value = "";
  document.getElementById("complaintType").value = "";
  document.getElementById("priority").value = "Low";
  document.getElementById("status").value = "Open";
  document.getElementById("notes").value = "";
}
