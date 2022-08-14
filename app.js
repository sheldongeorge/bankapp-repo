let main_header = document.getElementById('mainHeader');
let main_span = document.getElementById('mainSpan');
let welcome_id = document.getElementById('welcomeSpan');
let user_first = document.getElementById('userFirst');
let user_pass = document.getElementById('userPass');
let balance_span = document.getElementById('balanceSpan');
let person = {
  name: "",
  balance: "30,000",
  isAdmin: true,
};

main_header.addEventListener('mouseover', (event) => {
  main_span.style.color = 'white';
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

