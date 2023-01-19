import { getPosts } from "../../api/posts/index.mjs";
import displayError from "../../api/ui/displayError.mjs";

export async function displayPosts() {
    try {
        const posts = await getPosts();
        renderPosts("#posts", posts);
    } catch (error) {
        console.log(error);
        displayError("#posts", "Failed to fetch posts");
    }
}

function renderPosts(container, posts) {
    const parent = document.querySelector(container);
    parent.innerHTML = "";

    posts.forEach( (post) => {
        const { id, title, body, media, created, updated } = post;

        parent.innerHTML += `<a href="/post/index.html?id=${id}">
                                <div class="post card border-primary">
                                <h1>${title}</h1>
                                <p>${body}</p>
                                <img src="${media}" alt="${title}"/>
                                <p class="text-muted">post created: ${created}</p>
                                <p class="text-muted">post updated: ${updated}</p>
                                </div>
                                </a>`;
    });
}