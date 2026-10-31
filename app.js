const SUPABASE_URL = "https://mubbqqgpfstwmjuutfvc.supabase.co";
const SUPABASE_KEY = "sb_publishable_YL9d7dgFETx2zix2nQpoTA_LZxTs9NY";

async function login() {

    const email = document.getElementById("email").value.trim();
    const pin = document.getElementById("pin").value.trim();

    console.log("Email:", email);
    console.log("PIN:", pin);

    try {

        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/users?select=*&email=eq.${encodeURIComponent(email)}&pin=eq.${encodeURIComponent(pin)}`,
            {
                headers: {
                    "apikey": SUPABASE_KEY,
                    "Authorization": `Bearer ${SUPABASE_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        const users = await response.json();

        console.log("Users returned:", users);

        if (!users || users.length === 0) {
            alert("Invalid Email or PIN");
            return;
        }

        const user = users[0];

        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );

        if (user.role.toLowerCase() === "supervisor") {

            alert(
                "Welcome Supervisor: " +
                user.name
            );

        } else {

            alert(
                "Welcome Employee: " +
                user.name
            );

        }

    } catch (error) {

        console.error("Login Error:", error);

        alert(
            "Login Error. Check browser console."
        );

    }
}
