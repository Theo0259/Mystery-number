const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");
const replayBtn = document.getElementById("replayBtn");

let number = Math.floor(Math.random() * 10) + 1;
let tentatives = 0;

console.log(number);

function numberTest() {
  const userInput = parseInt(document.getElementById("userInput").value);
  let output = "";

  if (userInput === number) {
    output = `<p><h4>Gagné ! 🙂</h4> <br> Numéro mystère : ${number}</p>`;
    replayBtn.classList.remove("d-none"); // Affiche le bouton en supprimant la classe d-none
    
  } else if (userInput > number) {
    output = `<p>${userInput} ? ... c'est ➖</p>`;
  } else if (userInput < number) {
    output = `<p>${userInput} ? ... c'est ➕</p>`;
  }

  tentatives++;
  if (tentatives === 1) {
    output1.innerHTML = "1er essai " + output;
  } else if (tentatives === 2) {
    output2.innerHTML = "2ème essai " + output;
  } else {
    output3.innerHTML = "3ème essai " + output + " Le numéro mystère était : " + number;
    document.getElementById("btn").disabled = true;
    replayBtn.classList.remove("d-none"); // Affiche le bouton en supprimant la classe d-none
    
  }
}

replayBtn.addEventListener("click", function() {
  location.reload(); // Recharge la page
});

document.getElementById("btn").addEventListener("click", numberTest);
// function replayGame() {
//   number = Math.floor(Math.random() * 10) + 1;
//   tentatives = 0;
//   output1.innerHTML = "";
//   output2.innerHTML = "";
//   output3.innerHTML = "";
//   document.getElementById("btn").disabled = false;
//   replayBtn.classList.add("d-none"); // Masque le bouton en ajoutant la classe d-none
// }

//  document.getElementById("btn").addEventListener("click", numberTest);
// replayBtn.addEventListener("click", replayGame);





    
  
  







