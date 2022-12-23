import * as constants from "./api/constants.mjs";

import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";

import * as templates from "./templates/index.mjs"
import * as postMethods from "./api/posts/index.mjs"

const path = location.pathname;

if (path === '/profile/login/' || path === '/profile/login/index.html') {
    setLoginFormListener()
} else if (path === '/profile/register/' || '/profile/register/index.html') {
    setRegisterFormListener()
}

async function testTemplate() {
    const posts = await postMethods.getPosts();
    const post = posts.pop()
    const container = document.querySelector("#post");
    templates.renderPostTemplate(post, container);
}

testTemplate()