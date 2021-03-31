const API_URL = "http://localhost:5002/api/auth/"


export function registerUser(email, password) {
    return fetch(API_URL + "register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });
     

}


export function loginUser(email, password) {
    return fetch(API_URL + "login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });
}