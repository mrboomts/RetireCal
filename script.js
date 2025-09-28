
const dashboard = document.getElementById("dashboard");
let draggedItem = null;

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('dragstart', () => {
    draggedItem = card;
    setTimeout(() => {
      card.style.display = 'none';
    }, 0);
  });

  card.addEventListener('dragend', () => {
    setTimeout(() => {
      draggedItem.style.display = 'block';
      draggedItem = null;
    }, 0);
  });
});

dashboard.addEventListener('dragover', (e) => {
  e.preventDefault();
  const afterElement = getDragAfterElement(dashboard, e.clientY);
  if (afterElement == null) {
    dashboard.appendChild(draggedItem);
  } else {
    dashboard.insertBefore(draggedItem, afterElement);
  }
});

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.card:not(.dragging)')];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}
