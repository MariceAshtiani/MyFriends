import { createPost } from "../api/posts/index.mjs";
import { convertTags } from "./tags.mjs";

export function setCreatePostFormListener() {
    const form = document.querySelector("#createPost");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()

        const form = event.target;
        const formData = new FormData(form);
        const post = Object.fromEntries(formData.entries())
        post.tags = convertTags(post.tags)
        const action = form.action;
        const method = form.method;
    
        // send it to the API
        createPost(post)
            })
        }
    }