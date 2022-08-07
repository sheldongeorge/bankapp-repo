let myButton = document.getElementById('myBtn');
let myText = document.getElementById('myTxt');

myButton.addEventListener('click', (event) => {
  let message = myText.value;
  alert('Welcome to Hash Cash ' + message);
});
