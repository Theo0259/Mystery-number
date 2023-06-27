const result = document.getElementById("result");
const btn = document.getElementById("btn");
const replayBtn = document.getElementById("replayBtn");
let number = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

console.log(number);

function numberTest() {
  const userInput = parseInt(document.getElementById("userInput").value);
  let output = "";

  if (userInput === number) {
    output = `<p><h4>Gagné ! 🙂</h4> <br> Le numéro mystère était : ${number}</p>`;
    setTimeout(function () {
      replayBtn.classList.remove("d-none");
      btn.disabled = true;
    }, 1000);
  } else if (userInput > number) {
    output = `<p>${userInput} ? ... c'est ➖</p>`;
  } else {
    output = `<p>${userInput} ? ... c'est ➕</p>`;
  }

  attempts++;
  let attemptText = attempts === 1 ? "1er essai" : `${attempts}ème essai`;
  result.innerHTML += `<hr><p><h5>${attemptText}</h5></p><br>`;
  setTimeout(function () {
    result.innerHTML += output;
  }, 1000);

  if (attempts >= 3 && userInput !== number) {
    setTimeout(function () {
      result.innerHTML += `<p><h4>Perdu...☹️</h4></p><p>Le numéro mystère était : ${number}</p>`;
      btn.disabled = true;
      replayBtn.classList.remove("d-none");
    }, 1000);
  }
}

replayBtn.addEventListener("click", function () {
  location.reload();
});

btn.addEventListener("click", numberTest);
