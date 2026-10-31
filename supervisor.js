const user = JSON.parse(
    localStorage.getItem("currentUser")
);

if (!user) {
    window.location.href = "index.html";
}

document.getElementById("welcome").innerText =
    "Welcome " + user.name;

function clockIn() {
    alert("Clock In - Coming Soon");
}

function clockOut() {
    alert("Clock Out - Coming Soon");
}

function goApproval() {
    window.location.href = "approval.html";
}

function goPayroll() {
    alert("Payroll - Coming Soon");
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}
