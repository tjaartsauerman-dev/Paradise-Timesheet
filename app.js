const SUPABASE_URL = "https://mubbqqgpfstwmjuutfvc.supabase.co";
const SUPABASE_KEY = "sb_publishable_YL9d7dgFETx2zix2nQpoTA_LZxTs9NY";

async function login() {

    const email = document.getElementById("email").value.trim();
    const pin = document.getElementById("pin").value.trim();

    if (!email || !pin) {
        alert("Please enter Email and PIN");
        return;
    }

    try {

        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/users?select=*&email=eq.${encodeURIComponent(email)}&pin=eq.${encodeURIComponent(pin)}`,
            {
                method: "GET",
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

        
