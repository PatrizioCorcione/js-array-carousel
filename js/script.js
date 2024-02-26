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


for (let i = 0; i < imgTot.length; i++) {
  const imgFocus = imgTot[i];
  imgsJs.innerHTML += `<img class = 'hide img' src=${imgFocus} alt=>`
}

const imgComp = document.getElementsByClassName("img");

imgComp[0].classList.remove("hide");
console.log(imgComp);
upJs.classList.add("hide")
downJs.addEventListener('click',function(){
  upJs.classList.remove("hide")
  imgComp[counter].classList.add("hide")
  counter++;
  imgComp[counter].classList.remove("hide")
  console.log(counter);
  if (counter === imgComp.length - 1) {
    downJs.classList.add("hide")
    
  }
})

upJs.addEventListener('click',function(){
  imgComp[counter].classList.add("hide")
  counter--;
  if (counter === 0) {
    upJs.classList.add("hide")
    
  }
  imgComp[counter].classList.remove("hide")
  console.log(counter);
  downJs.classList.remove("hide")
})