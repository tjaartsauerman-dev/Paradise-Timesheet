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

        const users = await response.json();

        console.log(users);

        if (users.length === 0) {
            alert("Invalid Email or PIN");
            return;
        }

        const user = users[0];

        alert(
            "Welcome " +
            user.name +
            " (" +
            user.role +
            ")"
        );

    }
    catch (error) {

        console.error(error);

        alert("Login Error");

    }
}
