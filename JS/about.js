const buttons = document.querySelectorAll('.toggle-btn');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const p = button.nextElementSibling;
    p.classList.toggle('hidden');
  });
});