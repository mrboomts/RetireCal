
new Sortable(document.getElementById('dashboard'), {
  animation: 150,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  ghostClass: "ghost",
  dragClass: "dragging",
  fallbackOnBody: true,
  swapThreshold: 0.65
});
