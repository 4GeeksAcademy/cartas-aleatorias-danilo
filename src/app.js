let card1 = document.querySelector(".card");
let caja = document.querySelector(".container");
let numeros = document.getElementById("number");
let iconosTop = document.getElementById("top");
let iconosBotton = document.getElementById("botton");

let iconos = ["♦", "♥", "♠", "♣"];
let valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

function seleccionarCard() {
  let randomIcons = Math.floor(Math.random() * iconos.length);
  let randomValue = Math.floor(Math.random() * valores.length);
  numeros.innerHTML = valores[randomValue];
  iconosTop.innerHTML = iconos[randomIcons];
  iconosBotton.innerHTML = iconos[randomIcons];

  if (randomIcons == 0 || randomIcons == 1) {
    numeros.style.color = "red";
    iconosTop.style.color = "red";
    iconosBotton.style.color = "red";
  } else {
    numeros.style.color = "black";
    iconosTop.style.color = "black";
    iconosBotton.style.color = "black";
  }
}

seleccionarCard();
