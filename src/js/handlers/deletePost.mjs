import * as posts from "../api/posts/index.mjs";
import { removePost } from "../api/posts/delete.mjs";
import { getParam } from "../api/utils/tools.mjs";
import displayError from "../api/ui/displayError.mjs";

export async function setRemovePostListener(id) {

   // const id = getParam("id");

    try {
        const removeButton = document.querySelector("#removeButton");

        removeButton.addEventListener("click", async ({ target }) => {
            const response = await posts.removePost(target.dataset.id);
            console.log(response);
        })
    } catch (error) {
        console.warn(error);
    }

}