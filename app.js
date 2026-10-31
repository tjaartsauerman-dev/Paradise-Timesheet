const SUPABASE_URL = "https://mubbqqgpfstwmjuutfvc.supabase.co";
const SUPABASE_KEY = "sb_publishable_YL9d7dgFETx2zix2nQpoTA_LZxTs9NY";

async function login() {

    const email = document.getElementById("email").value;
    const pin = document.getElementById("pin").value;

    try {

        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/users?select=*&email=eq.${email}&pin=eq.${pin}`,
            {
                headers: {
                    "apikey": SUPABASE_KEY,
                    "Authorization": `Bearer ${SUPABASE_KEY}`
                }
            }
        );

        const data = await response.json();

        if (!data || data.length === 0) {
            alert("Invalid Email or PIN");
            return;
        }

        const user = data[0];

        if (user.role.toLowerCase() === "supervisor") {
            alert("Welcome Supervisor: " + user.name);
        } else {
            alert("Welcome Employee: " + user.name);
        }

    } catch (error) {
        console.error(error);
        alert("Login error");
    }
}
