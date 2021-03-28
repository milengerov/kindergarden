const API_URL = "http://localhost:5002/api/auth/"


export function registerUser(username, email, password) {
    return fetch(API_URL + "register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, email, password})
    });

}