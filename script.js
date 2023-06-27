const result = document.getElementById("result");
const btn = document.getElementById("btn");
const replayBtn = document.getElementById("replayBtn");
let number = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function numberTest() {
  const userInput = parseInt(document.getElementById("userInput").value);
  let output = "";

  if (userInput === number) {
    output = `<p><h4>Gagné ! 🙂</h4> <br> Le numéro mystère était : ${number}</p>`;
    replayBtn.classList.remove("d-none");
    btn.disabled = true;
  } else if (userInput > number) {
    output = `<p>${userInput} ? ... c'est ➖</p>`;
  } else {
    output = `<p>${userInput} ? ... c'est ➕</p>`;
  }

  attempts++;

  if (attempts === 1) {
    result.innerHTML += `<hr><p><h5>1er essai</h5></p>`;
  } else if (attempts === 2) {
    result.innerHTML += `<hr><p><h5>2ème essai</h5></p><br>`;
  } else if (attempts === 3 && userInput === number) {
    result.innerHTML += `<hr><p><h5>3ème essai</h5></p><br>`;
  } else {
    result.innerHTML += `<hr><p><h5>3ème essai</h5></p><br>`;
    result.innerHTML += `<p><h4>Perdu...☹️</h4></p><br>${output}<br><p>Le numéro mystère était : ${number}</p>`;
    btn.disabled = true;
    replayBtn.classList.remove("d-none");
  }

  setTimeout(function () {
    result.innerHTML += output;
  }, 1000);
}

replayBtn.addEventListener("click", function () {
  location.reload(); // Recharge la page pour recommencer le jeu
});

btn.addEventListener("click", numberTest);
