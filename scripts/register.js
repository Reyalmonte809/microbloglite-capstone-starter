function register() {
    return fetch(apiBaseURL + "/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({
            "username": signName.value,
            "fullName": signFull.value,
            "password": signPass.value
        })
    }).then(() => location = "/");
}

registerButton.addEventListener("click", register)