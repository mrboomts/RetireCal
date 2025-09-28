
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('dragstart', e => {
    card.classList.add('dragging');
  });
  card.addEventListener('dragend', e => {
    card.classList.remove('dragging');
  });
});
