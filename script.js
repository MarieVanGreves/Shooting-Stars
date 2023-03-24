//récupération du body
const body = document.getElementById("container");
//data de test stars
const astérioide = [
  {
    name: "crocs",
    img: "./assets/st_small_507x507-pad_600x600_f8f8f8-removebg-preview (1).png",
  },
  {
    name: "pizza",
    img: "./assets/pizza-png-19313.png",
  },
  {
    name: "crocsJade",
    img: "./assets/crocsjadambre.png",
  },
];

const star = document.createElement("div");
star.classList.add("star");
body.appendChild(star);

//creation de la crocs
function createCrocs(name, img) {
  const img1 = document.createElement("img");
  console.log(img);
  img1.src = img;
  img1.classList.add("elementOne");
  star.appendChild(img1);
}
//Animation des stars

for (let i = 0; i < 50; i++) {
  console.log(i);
  createCrocs(astérioide[i]);
  let y = Math.floor(Math.random() * window.innerHeight);
  star.style.top = y + "px";
  setTimeout(2000);
  setInterval(createCrocs, 1000);
}
