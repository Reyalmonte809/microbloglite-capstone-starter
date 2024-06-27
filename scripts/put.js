function like(postId) {
    fetch(apiBaseURL + "/api/likes", {
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.token
        },
        body: JSON.stringify({
            postId: postId
        })
    }).then(response => {
        console.log(response);
        location = "./blog.html";  //force refresh
    });
}

createButton.addEventListener("click", () => {
    fetch(apiBaseURL + "/api/posts", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${loginData.token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: bodyPost.value

        })
    }).then(r => location = "/body/blog.html")
})

function getMessage(message) {
    return `
    <div>
        <h1>${message.username}</h1>
        <div class="username">${message.text}</div>
        <div class="Likes:">${message.likes.length} Likes 
        <button onclick="like('${message._id}')">Like</button>
        </div>
    </div>
    <hr>
    `;
}
function showMessages(messages) {
    if (messages.hasOwnProperty("message")) {
        location = "/";
        return;
    }
    postElement.innerHTML = messages.map(getMessage).join("");
}
const loginData = getLoginData();

fetch(apiBaseURL + "/api/posts", {
    method: "GET",

    headers: { Authorization: `Bearer ${loginData.token}` }
}).then(response => {
    if (response.statusCode >= 400) {
        console.log(response);
        location = "/";
    }
    return response.json()
}).then(data => {
    showMessages(data);
});
