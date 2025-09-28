const dashboard = document.getElementById("dashboard");
let dragCard = null;
let offsetX = 0;
let offsetY = 0;

const sizes = ["small", "medium", "large", "xlarge"];

document.querySelectorAll(".card").forEach(card => {
  card.classList.add("medium");

  card.addEventListener("click", (e) => {
    // Prevent drag click
    if (dragCard) return;

    const currentSize = sizes.find(size => card.classList.contains(size));
    let nextIndex = (sizes.indexOf(currentSize) + 1) % sizes.length;
    card.classList.remove(currentSize);
    card.classList.add(sizes[nextIndex]);
  });

  card.addEventListener("dragstart", (e) => {
    dragCard = card;
    setTimeout(() => card.style.display = "none", 0);
  });

  card.addEventListener("dragend", (e) => {
    card.style.display = "block";
    dragCard = null;
  });
});

dashboard.addEventListener("dragover", (e) => {
  e.preventDefault();
  const afterElement = getDragAfterElement(dashboard, e.clientX);
  if (afterElement == null) {
    dashboard.appendChild(dragCard);
  } else {
    dashboard.insertBefore(dragCard, afterElement);
  }
});

function getDragAfterElement(container, x) {
  const draggableElements = [...container.querySelectorAll(".card:not(.dragging)")];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = x - box.left - box.width / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}