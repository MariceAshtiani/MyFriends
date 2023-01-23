import * as templates from "./templates/index.mjs";
import * as listeners from "./handlers/index.mjs";
import * as posts from "./api/posts/index.mjs";


export default function router() {

const path = location.pathname;

switch (path) {
    case '/profile/login/':
    case'/profile/login/index.html':
        listeners.setLoginFormListener();
        break;
    case '/profile/register/':
    case '/profile/register/index.html':
        listeners.setRegisterFormListener();
        break;
    case '/post/create/':
    case '/post/create/index.html':
        listeners.setCreatePostFormListener();
        listeners.setLogoutListener(); 
        break;
    case '/post/edit/':
    case '/post/edit/index.html':
        listeners.setUpdatePostFormListener();
        listeners.setRemovePostListener();
        listeners.setLogoutListener(); 
        break;
    case '/profile/edit/':
    case '/profile/edit/index.html':
        listeners.setUpdateProfileFormListener();
        listeners.setLogoutListener(); 
        break;
    case '/profile/':
        listeners.setLogoutListener();
        break;
    case "/posts/index.html":
        templates.displayPosts();
        listeners.setLogoutListener(); 
        // (async() => {
        //     const getAllPosts = await posts.getPosts();
        //     const postsContainer = document.querySelector("#posts")
        //     templates.renderPostTemplates(getAllPosts, postsContainer)
        // })()
        break;
    case "/post/index.html":
        templates.viewSinglePost();
        listeners.setLogoutListener(); 
        break;
    
}
}