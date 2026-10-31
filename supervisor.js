const SUPABASE_URL = "https://mubbqqgpfstwmjuutfvc.supabase.co";
const SUPABASE_KEY = "sb_publishable_YL9d7dgFETx2zix2nQpoTA_LZxTs9NY";

const user = JSON.parse(
    localStorage.getItem("currentUser")
);

if (!user) {
    window.location.href = "index.html";
}

document.getElementById("welcome").innerText =
    "Welcome " + user.name;

async function clockIn() {

    try {

        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/timesheets`,
            {
                method: "POST",
                headers: {
                    "apikey": SUPABASE_KEY,
                    "Authorization": `Bearer ${SUPABASE_KEY}`,
                    "Content-Type": "application/json",
                    "Prefer": "return=representation"
                },
                body: JSON.stringify({
                    user_id: user.id,
                    employee_email: user.email,
                    clock_in: new Date().toISOString(),
                    status: "Open"
                })
            }
        );

        if (response.ok) {
            alert("Clock In Successful");
        } else {
            const error = await response.text();
            console.log(error);
            alert("Clock In Failed");
        }

