// add addeventlistener to the submit button
document.getElementById("loginButton").addEventListener("click", function () {
// get the text from gmail and password fields
    const emailField = document.getElementById("gmailField");
    const email = emailField.value;
    
    const passwordField = document.getElementById("passwordField");
    const password = passwordField.value
    //  varify email and password with the requrred
     if(email == "shovon@gmail.com" && password == "secret"){
        window.location.href="bank.html";
     }
     else{
        alert("Invalid password, Please try again.")
     }
    
})