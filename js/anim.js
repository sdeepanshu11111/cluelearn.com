console.log("anim.js")


let firstCard = document.querySelector(".cardsFirstRow").firstElementChild;
let secondCard = document.querySelector(".cardsFirstRow").lastElementChild;
let thirdCard = document.querySelector(".cardsSecondRow").firstElementChild;
let forthCard = document.querySelector(".cardsSecondRow").lastElementChild;

let why1 = document.querySelector('.whydiv2');
let why2 = document.querySelector('.whydiv3');



let appScreen = document.getElementById('appscreen')

let contact = document.querySelector('.contact-form')



let download = document.querySelector('.cta')

console.log(appScreen)

document.addEventListener('scroll', anim)

// animation function
function anim(){

let windowHeight = window.innerHeight

firstCard.classList.add("transformLeft")
secondCard.classList.add("transformRight")
thirdCard.classList.add("transformLeft")
forthCard.classList.add("transformRight")


// why1.classList.add("transformLeft")
// why2.classList.add("transformRight")


appScreen.classList.add('scaleZero')

download.classList.add('scaleZero')

contact.classList.add('transformBottom')

// cards xy
 let xy =  firstCard.getBoundingClientRect()
 let xy2 = thirdCard.getBoundingClientRect()

 let appSc = appScreen.getBoundingClientRect()

 let contactInfo = contact.getBoundingClientRect()

 let whyTop = why1.getBoundingClientRect()

 let downT = download.getBoundingClientRect()
 
if((windowHeight / 1.5) > xy.top){

  firstCard.classList.add('transformNormal')
  secondCard.classList.add('transformNormal')
}


if((windowHeight / 1.5) > whyTop.top){

  why1.classList.add('transformNormal')
  why2.classList.add('transformNormal')
}

if((windowHeight / 1.2) > xy2.top){



  thirdCard.classList.add("transformNormal")
forthCard.classList.add("transformNormal")
}


if(windowHeight > appSc.top){
  appScreen.classList.add('scaleNormal')
}

if((windowHeight + 350)  > contactInfo.top){
  contact.classList.add('transformNormal')
}
 
if(windowHeight > downT.top){
  download.classList.add('scaleNormal')
}





}


