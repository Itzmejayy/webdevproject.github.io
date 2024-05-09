document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get username and password values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    console.log("Username entered:", username);
    console.log("Password entered:", password);

    // Check if username and password match the credentials
    if (username === 'ppbadode' && password === 'Piyush@121') {
        console.log("Login successful!");
        // Set username in local storage
        localStorage.setItem('username', 'ppbadode');
        // Redirect to index.html
        window.location.href = 'index.html';
    } else {
        console.log("Login failed!");
        // Incorrect credentials, handle accordingly (display error message, etc.)
        alert('Incorrect username or password. Please try again.');
    }
});
