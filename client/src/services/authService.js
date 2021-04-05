const API_URL = "http://localhost:5002/api/auth/"


export function registerUser(email, password) {
    return fetch(API_URL + "register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
        mode: "cors",
        credentials: "include"
    });
     

}


export function loginUser(email, password) {
    return fetch(API_URL + "login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
        mode: "cors",
        credentials: "include",
        // withCredentials: true
    });
}

export function logoutUser() {
    return fetch(API_URL + "logout", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },        
        mode: "cors",
        credentials: "include",
        // withCredentials: true
    });
}