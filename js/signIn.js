let signInButton = document.querySelector("#sign");

let signInDiv = document.querySelector(".signIn");

console.log(signInButton)


signInButton.addEventListener('click', signHandler)


function signHandler(){

 signInDiv.classList.remove("none")
}