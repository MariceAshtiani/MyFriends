import { getPost } from "../../api/posts/read.mjs";
import displayError from "../../api/ui/displayError.mjs";
import { getParam } from "../../api/utils/tools.mjs";

export async function viewSinglePost() {

    const id = getParam("id");

    try { 
        const post = await getPost(id);
        renderPost("#post", post);
    } catch (error) {
        console.log(error);
        displayError("#post", "Failed to fetch post");
    }
}

function renderPost(container, post) {
    const parent = document.querySelector(container);
    parent.innerHTML = "";

    const { id, title, body, media, created, updated } = post;

    parent.innerHTML += `
    <div class="post card border-primary">
    <h1>${title}</h1>
    <p>${body}</p>
    <img src="${media}" alt="${title}"/>
    <p>post created: ${created}</p>
    <p>post updated: ${updated}</p>
    </div>
    <div class="row justify-content-center">
    <a href="/post/edit/?id=${id}">
    <button class="btn-primary edit-btn btn">Edit post</button>
    </a>
    </div>
   `;
}