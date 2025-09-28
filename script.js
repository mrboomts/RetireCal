
new Sortable(document.getElementById('dashboard'), {
  animation: 150,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  ghostClass: "ghost",
  dragClass: "dragging",
  fallbackOnBody: true,
  swapThreshold: 0.65
});

// Resize logic
document.querySelectorAll('.edit-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const card = e.target.closest('.card');
    card.querySelector('.resize-panel').classList.toggle('hidden');
  });
});

document.querySelectorAll('.save-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const panel = e.target.closest('.resize-panel');
    const card = e.target.closest('.card');
    const width = panel.querySelector('.width-input').value;
    const height = panel.querySelector('.height-input').value;
    card.style.width = width + "px";
    card.style.height = height + "px";
    panel.classList.add('hidden');
  });
});
