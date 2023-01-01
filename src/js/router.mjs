import * as templates from "./templates/index.mjs";
import * as listeners from "./handlers/index.mjs";
import * as posts from "./api/posts/index.mjs";

export default function router() {

const path = location.pathname;

switch (path) {
    case '/profile/login/' || '/profile/login/index.html':
        listeners.setLoginFormListener()
        break;
    case '/profile/register/' || '/profile/register/index.html':
        listeners.setRegisterFormListener()
        break;
    case '/post/create/' || '/post/create/index.html':
        listeners.setCreatePostFormListener()
        break;
    case '/post/edit/' || '/post/edit/index.html':
        listeners.setUpdatePostFormListener()
        break;
    case '/profile/edit/' || '/profile/edit/index.html':
        listeners.setUpdateProfileFormListener()
        break;
    case "/posts/":
    case "/posts/index.html":
        (async() => {
            const getAllPosts = await posts.getPosts();
            const postsContainer = document.querySelector("#posts")
            templates.renderPostTemplates(getAllPosts, postsContainer)
        })()
        break;
}
}