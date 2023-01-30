import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";



/**Gets all posts */
export async function getPosts() {
    const getPostsURL = `${API_SOCIAL_URL}${action}`;

    const postContainer = document.querySelector("#posts");

    const response = await authFetch(getPostsURL)

    return await response.json();
}










/**Gets one post */
export async function getPost(id) {
    if (!id) {
        throw new error("Post-ID required to get post");
    }

    const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

    const response = await authFetch(getPostURL)

    return await response.json();
}