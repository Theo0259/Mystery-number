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
    output = `<p><h4>Gagné ! 🙂</h4> <br> Le numéro mystère était : ${number}</p>`;
    replayBtn.classList.remove("d-none");
    document.getElementById("btn").disabled = true;
  } else if (userInput > number) {
    output = `<p>${userInput} ? ... c'est ➖</p>`;
  } else if (userInput < number) {
    output = `<p>${userInput} ? ... c'est ➕</p>`;
  }

  tentatives++;
  if (tentatives === 1) {
    output1.innerHTML = `<p><h5>1er essai</h5> ${output}</p>`;
  } else if (tentatives === 2) {
    output2.innerHTML = `<p><h5>2ème essai</h5> ${output}</p>`;
  } else if (tentatives === 3 && userInput === number) {
    output3.innerHTML = `<p><h5>3ème essai</h5></p><br>${output}`;
  } else {
    output3.innerHTML = `<p><h4>Perdu...☹️</h4></p><br>${output}<br><p>Le numéro mystère était : ${number}</p>`;
    document.getElementById("btn").disabled = true;
    replayBtn.classList.remove("d-none");
  }
}

replayBtn.addEventListener("click", function () {
  location.reload(); // Recharge la page
});

document.getElementById("btn").addEventListener("click", numberTest);
