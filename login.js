const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");
const loginErrorMessage = document.getElementById("login-error-msg");
//Button listener for username and password
loginButton.addEventListener("click", (e) =>{
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if(username === "kwaza" && password === "sakhumzi")// 
    {
        window.open('deshboard.html');
    }else {
        loginErrorMessage.style.opacity = 1;
    }
});
  

