import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import displayError from "../ui/displayError.mjs";

const action = "/posts";
const method = "put";

export async function updatePost(postData) {
    if (!postData.id) {
        throw new error("Post-ID required to update");
    }
    const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

    const response = await authFetch(updatePostURL, {
        method,
        body: JSON.stringify(postData)
    })

   if (response.ok===false) {
    alert("You do not have permission to edit this post");

   }

    console.log(response);

    if (response.ok) {
        alert("Post updated");
    }

    return await response.json();

    
}
