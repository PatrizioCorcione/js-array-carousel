const imgsJs = document.querySelector(".imgs")
const imgTot = [
  "assets/img/01.webp",
  "assets/img/02.webp",
  "assets/img/03.webp",
  "assets/img/04.webp",
  "assets/img/05.webp"
]
let counter = 0;
const upJs = document.querySelector(".up")
const downJs = document.querySelector(".down")
console.log(counter);

for (let i = 0; i < imgTot.length; i++) {
  const imgFocus = imgTot[i];
  imgsJs.innerHTML += `<img class = 'hide img' src=${imgFocus} alt=>`
}

const imgComp = imgsJs.getElementsByClassName("img");

imgComp[0].classList.remove("hide");

downJs.addEventListener('click',function(){
  imgComp[counter].classList.add("hide")
  counter++;
  imgComp[counter].classList.remove("hide")
  
})