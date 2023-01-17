import * as posts from "../api/posts/index";

export async function setRemovePostListener(id) {
    try {
        const removeButton = document.querySelector("#removeButton");

        removeButton.addEventListener("click", async ({ target }) => {
            const response = await posts.removePost(target.dataset.id);
            console.log(response);
        })
    } catch (error) {
        showError("Something went wrong")
        console.warn(error);
    }
}