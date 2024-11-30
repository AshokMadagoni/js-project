function addUser() {
    let username = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username && password) {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if the username already exists
        if (!users.some(user => user.username === username)) {
            users.push({ username: username, password: password });
            localStorage.setItem("users", JSON.stringify(users));
            alert("User added successfully!");
            document.getElementById("email").value = '';
            document.getElementById("password").value = '';
            location.href="login.html"
        } else {
            alert("Username already exists. Please choose another.");
            document.getElementById("email").value = '';
            document.getElementById("password").value = '';
        }
    } else {
        alert("Please enter both username and password.");
    }
}