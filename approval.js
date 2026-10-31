const user = JSON.parse(
    localStorage.getItem("currentUser")
);

if (!user) {
    window.location.href = "index.html";
}

if (user.role.toLowerCase() !== "supervisor") {
    alert("Access Denied");
    window.location.href = "index.html";
}

function goBack() {
    window.location.href = "supervisor.html";
}
