import * as constants from "./api/constants.mjs";

import * as listeners from "./handlers/index.mjs"
import * as templates from "./templates/index.mjs"
import * as postMethods from "./api/posts/index.mjs"

const path = location.pathname;

if (path === '/profile/login/' || path === '/profile/login/index.html') {
    listeners.setLoginFormListener()
} else if (path === '/profile/register/' || '/profile/register/index.html') {
    listeners.setRegisterFormListener()
} else if (path === '/post/create/' || '/post/create/index.html') {
    listeners.setCreatePostFormListener()
} else if (path === '/post/edit/' || '/post/edit/index.html') {
    listeners.setUpdatePostFormListener()
} else if (path === '/profile/edit' || '/profile/edit/index.html') {
    listeners.setUpdateProfileFormListener()
}