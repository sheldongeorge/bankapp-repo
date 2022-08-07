let myButton = document.getElementById('myBtn');
let myText = document.getElementById('myTxt');
let mySpanny = document.getElementById('textSpan');
let mySpanny2 = document.getElementById('mySpan');
let increaseButton = document.getElementById('increaseBtn');
let decreaseButton = document.getElementById('decreaseBtn');
let myBalance = 300000;

function addUserName() {
  document.location.href = 'main.html';
};

mySpanny2.innerHTML = myBalance;

increaseButton.addEventListener('click', (event) => {
  myBalance += 5000;
  mySpanny2.innerHTML = myBalance;
});

decreaseButton.addEventListener('click', (event) => {
  myBalance -= 5000;
  mySpanny2.innerHTML = myBalance;
});
