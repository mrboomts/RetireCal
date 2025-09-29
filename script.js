const cards = document.querySelectorAll('.card');
let dragged = null;

cards.forEach(card => {
  card.addEventListener('dragstart', e => {
    dragged = card;
    setTimeout(() => card.style.display = "none", 0);
  });

  card.addEventListener('dragend', () => {
    dragged.style.display = "block";
    dragged = null;
  });

  card.addEventListener('touchstart', e => {
    dragged = card;
    card.style.opacity = '0.5';
  });

  card.addEventListener('touchend', e => {
    if (dragged) dragged.style.opacity = '1';
    dragged = null;
  });
});

document.getElementById('dashboard').addEventListener('dragover', e => e.preventDefault());
document.getElementById('dashboard').addEventListener('drop', e => {
  e.preventDefault();
  const target = e.target.closest('.card');
  if (target && target !== dragged) {
    target.before(dragged);
  }
});