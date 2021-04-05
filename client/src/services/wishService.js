const API_URL = "http://localhost:5002/api/desire/"


export function create(wishData) {
    return fetch(API_URL + "create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(wishData),
        mode: "cors",
        credentials: "include",
        withCredentials: true
    });    

}


// export function loginUser(email, password) {
//     return fetch(API_URL + "login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ email, password })
//     });
// }