function getPost(message){
    return`
       <h1> ${message.text}</h1>
       <div>${message.username}</div>
       <div> likes: ${message.likes.length}</div>
       <hr>

    `
}

function showPosts(data){
    postElement.innerHTML = data.map(getPost).join('')
}

fetch(apiBaseURL + "/api/posts", {
        headers: {Authorization: `Bearer ${localStorage.token}`}
})  .then(r=>r.json())
    .then(showPosts)
