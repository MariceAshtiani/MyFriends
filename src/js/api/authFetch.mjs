import { load } from "../storage/index.mjs";

/*Returns correct header*/

export default function headers(hasBody = false) {
    const headers = {};
    

    if (localStorage.token) {
        let token = load("token");
        headers["Authorization"] = `Bearer ${token}`;
    }

    if (Boolean(hasBody)) {
        headers["Content-Type"] = `application/json`;
    }

    return headers; 
}

export async function authFetch(url, data) {
    return await fetch(url, {
        body: JSON.stringify(data),
        headers: headers(data)
    })
}