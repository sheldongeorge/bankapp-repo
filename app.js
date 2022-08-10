let main_header = document.getElementById('mainHeader');
let main_span = document.getElementById('mainSpan');

main_header.addEventListener('mouseover', (event) => {
  main_span.style.color = 'darkolivegreen';
  main_span.style.transition = '0.4s ease';
});

main_header.addEventListener('mouseleave', (event) => {
  main_span.style.color = 'black';
});

function changePage() {
  window.location.href = "main.html";
};