let main_header = document.getElementById('mainHeader');
let main_span = document.getElementById('mainSpan');
let welcome_id = document.getElementById('welcomeSpan');
let user_first = document.getElementById('userFirst');
let user_pass = document.getElementById('userPass');
let balance_span = document.getElementById('balanceSpan');
let increase_button = document.getElementById('increaseButton');
let decrease_button = document.getElementById('decreaseButton');
let person = {
  name: "",
  balance: 30000,
  isAdmin: true,
  increaseBalance: function() {
    this.balance += 5000;
  },
  decreaseBalance: function() {
    this.balance -= 5000;
  }
};

main_header.addEventListener('mouseover', (event) => {
  main_span.style.color = 'darkgreen';
  main_span.style.transition = '0.6s ease';
});

main_header.addEventListener('mouseleave', (event) => {
  main_span.style.color = 'black';
});

function assignName() {
  if(user_pass.value != 'pass')
  {
    alert('Please enter a valid password.');
  }else {
    window.location.href = 'main.html';
  }
  let userId = user_first.value;
  person.name = userId;
  welcome_id.innerText = person.name;
};

balance_span.innerText = person.balance;

increase_button.addEventListener('click', (event) => {
  person.increaseBalance();
  balance_span.innerText = person.balance;
});

decrease_button.addEventListener('click', (event) => {
  person.decreaseBalance();
  balance_span.innerText = person.balance;
});