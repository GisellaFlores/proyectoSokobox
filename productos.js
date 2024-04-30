const buyButtons = document.querySelectorAll('.card-body .btn-primary');

buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productTitle = button.parentNode.querySelector('.card-text').textContent;
    alert(`¡"${productTitle.trim()}" ha sido agregado al carrito!`);
  });
});
