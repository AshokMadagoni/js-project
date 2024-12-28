
function login() {
    let username = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(user => user.username === username && user.password === password);

    if (existingUser) {
        alert("Logged in successfully!");
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';
        location.href = "quizselect.html";
        
        localStorage.setItem("sidename", existingUser.username);
    } else {
        alert("No credentials found in storage. Sorry, you can't log in.");
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';
    }
}

function guestmode(){
    localStorage.setItem("sidename", "Guest");
    location.href = "quizselect.html";
}

function route() {
    location.href = "register.html";
}
