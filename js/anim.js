console.log("anim.js")


let firstCard = document.querySelector(".cardsFirstRow").firstElementChild;
let secondCard = document.querySelector(".cardsFirstRow").lastElementChild;
let thirdCard = document.querySelector(".cardsSecondRow").firstElementChild;
let forthCard = document.querySelector(".cardsSecondRow").lastElementChild;




let download = document.querySelector('.cta')

console.log(download)

document.addEventListener('scroll', anim)


function anim(){

let windowHeight = window.innerHeight

firstCard.classList.add("transformLeft")
secondCard.classList.add("transformRight")
thirdCard.classList.add("transformLeft")
forthCard.classList.add("transformRight")


// cards xy
 let xy =  firstCard.getBoundingClientRect()
 let xy2 = thirdCard.getBoundingClientRect()


 
if((windowHeight / 1.5) > xy.top){

  firstCard.classList.add('transformNormal')
  secondCard.classList.add('transformNormal')
}

if((windowHeight / 1.2) > xy2.top){



  thirdCard.classList.add("transformNormal")
forthCard.classList.add("transformNormal")
}

 
}


console.log(firstCard)