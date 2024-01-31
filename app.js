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
const saveBtn = document.getElementById("save-btn");
const savedList = document.getElementById("saved-list");

button.addEventListener("click", function () {
  let password = "";
  for (let i = 0; i < Math.floor(Math.random() * characters.length); i++) {
    password += characters[getRandomNumber()];
    passwordText.textContent = password;
  }
  if (password.length < 8) {
    passwordText.style.color = "red";
    alertText.innerHTML = "Password too short";
    alertText.classList.add("incorrect-password");
    saveBtn.classList.add("display-none");
  } else if (checkForDigit(password) === false) {
    passwordText.style.color = "red";
    alertText.innerHTML = "Password should contain a number";
    alertText.classList.add("incorrect-password");
    saveBtn.classList.add("display-none");
  } else {
    passwordText.style.color = "green";
    alertText.classList.remove("incorrect-password");
    alertText.innerHTML = "";
    saveBtn.classList.remove("display-none");
  }
});

saveBtn.addEventListener("click", function () {
  savedList.innerHTML = `${passwordText.textContent}`;
});

function getRandomNumber() {
  return Math.floor(Math.random() * characters.length);
}

function checkForDigit(password) {
  const regex = /.*\d.*/;
  return regex.test(password);
}
