import * as posts from "../api/posts/index";

export function setRemovePostListener(id) {
    const removeButton = document.querySelector("#removeButton");

    removeButton.addEventListener("click", async () => {
        const response = await posts.removePost(id);
        console.log(response);

        // check if removing of post was successful

        if (200 <= response < 300){
            checkIfDeleted();
        }
    });
}