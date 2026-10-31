const user = JSON.parse(
    localStorage.getItem("currentUser")
);

if (!user) {
    window.location.href = "index.html";
}

if (user.role.toLowerCase() !== "supervisor") {
    alert("Access denied");
    window.location.href = "index.html";
}

document.getElementById("approvalList").innerHTML = `
    <p>No pending approvals yet.</p>
`;

function goBack() {
    window.location.href = "supervisor.html";
}
