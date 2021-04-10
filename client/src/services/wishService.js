const API_URL = "http://localhost:5002/api/desires"


export function create(wishData, wishId) {

    let fetchUrl = "http://localhost:5002/api/desires"
    
    if (wishId) {
        fetchUrl += `/${wishId}/edit`;
        
    }

    return fetch(fetchUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(wishData),
        mode: "cors",
        credentials: "include",
        // withCredentials: true --> with axios
    });    

}


export function getAll() {
    return fetch(API_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            
        },        
        mode: "cors",
        credentials: "include"        
    });
}

export function getOne(id) {
    return fetch(API_URL + `/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        credentials: "include"        
    });
}

export function getMany(kindergarten, born) {
    return fetch(API_URL + `/search/${kindergarten}/${born}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        credentials: "include"        
    });
}



export function deleteOne(id) {
    return fetch(API_URL + `/${id}/delete`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        credentials: "include"        
    });
}


