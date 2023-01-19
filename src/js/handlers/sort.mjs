import { getPosts } from "../api/posts/read.mjs";
import { renderPosts } from "../templates/posts/list.mjs";
import { getParam } from "../api/utils/tools.mjs";

export function sortPostsOldestToNewest(posts) {
    return posts.sort(function (postA, postB) {
        return new Date(postA.updated) - new Date(postB.updated)
    })
}

function searchPostsByTitle(posts, term) {
    term = term.toLowerCase().trim()

    return posts.filter(function(post) {
        return post.title.toLowerCase().trim().includes(term)
    })
}

function searchPostsByEverything(posts, term) {
    term = term.toLowerCase().trim()

    return posts.filter(function(post) {
        const titleMatches = post.title.includes(term)
        const bodyMatches = post.body.includes(term)
        const tagsMatches = post.tags.includes(term)
        return titleMatches || bodyMatches || tagsMatches
        
    })
}

function renderHomePage(posts) {
    const postThumbnails = posts.map(renderPosts)
    document.body.innerHTML = "";
    document.body.append(...postThumbnails);
}

export async function test() {
    try{

        renderHomePage(posts)

        const sortForm = document.querySelector("form.sort");
        sortForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const sortedPosts = sortPostsOldestToNewest(posts);
            renderHomePage(sortedPosts)
        })
    } catch(error) {
        console.warn(error);
    }
}