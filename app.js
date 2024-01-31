const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "W",
  "X",
  "Y",
  "Z",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];
const button = document.getElementById("btn");
const passwordText = document.getElementById("password-text");
const alertText = document.getElementById("alert-box");

button.addEventListener("click", function () {
  let password = "";
  for (let i = 0; i < Math.floor(Math.random() * characters.length); i++) {
    password += characters[getRandomNumber()];
    passwordText.textContent = password;
  }
  if (password.length < 8) {
    passwordText.style.color = "red";
    alertText.innerHTML = "Password too short";
    alertText.classList.add("too-short");
  } else {
    passwordText.style.color = "green";
    alertText.classList.remove("too-short");
    alertText.innerHTML = "";
  }
});

function getRandomNumber() {
  return Math.floor(Math.random() * characters.length);
}
