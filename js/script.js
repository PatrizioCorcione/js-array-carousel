const imgsJs = document.querySelector(".imgs")
const imgTot = [
  "assets/img/01.webp",
  "assets/img/02.webp",
  "assets/img/03.webp",
  "assets/img/04.webp",
  "assets/img/05.webp"
]


for (let i = 0; i < imgTot.length; i++) {
  const imgFocus = imgTot[i];
  imgsJs.innerHTML += `"<img class = 'hide img' src=${imgFocus} alt=>"`
}

const imgComp = imgsJs.getElementsByClassName("img");
console.log(imgComp);

imgComp[0].classList.remove("hide");