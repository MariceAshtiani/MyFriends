import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "delete";

export async function removePost(id) {
    if (!id) {
        throw new Error("Post-ID required to delete post");
    }
    const removePostURL = `${API_SOCIAL_URL}${action}/${id}`;


    const token = localStorage.token;

    if (!token) {
        throw new Error("You must be logged in to delete a post")
    }


    const response = await authFetch(removePostURL, {
        method
    })

    if (response.ok) {
        alert("Post deleted!")
        window.location.replace("/posts/")
        return await response.json();
    } else {
        alert("You do not have permission to delete or edit this post");
    }


    console.log(response);

    throw new Error("Could not delete this item");

//    return await response.json();
}