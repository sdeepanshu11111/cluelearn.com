


let html = `<img src="done.png" alt="">
<h1>
    Thank you for your feedback
</h1>`;

let contactCard = document.querySelector(".contact-card")
let inputName = document.getElementById('name')
let email = document.getElementById('email')
let textArea = document.getElementById('textA')
let submitBtn = document.getElementById('contactFormSubmit')
let mobile = document.getElementById('number')

let mobileNumberRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;





submitBtn.addEventListener('click', deep)

function deep(){
  

console.log(inputName.value.length)








  if(inputName.value.length > 2 && email.value && textArea.value ) {

async function postAnswer(url = "", data = {}) {


  // Default options are marked with *

  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: new Headers({
      Authorization: data,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
        "mobileNumber" : `${inputName.value}`,
        "emailId"   : `${email.value}`,
        "mobile" : `${mobile.value}`,
        "feedback" : `${textArea.value}`
    }), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function answer() {
  var key =
    "Bearer b592038930ac4391896ebd7a6e8119faf28b27e69dee4e9998d3d91544ff7321";
  var url =
    "https://cluelearn.com/apidev/WriteToUsWeb";
  postAnswer(url, key).then((responseData) => {
    console.log(responseData);


    if(responseData.status == true){
      
console.log(contactCard)

contactCard.innerHTML = "";

contactCard.innerHTML = html




    }else {
      alert("Something went wrong")
    }


    // dropdown respomse with likes

  });
}

answer();
    
    
  }else {
    alert('please fill all')
  }
 
}





