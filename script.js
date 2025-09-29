const dashboard = document.getElementById("dashboard");

const sizes = ["small", "medium", "large", "xlarge"];
let cards = [];

["red", "yellow", "green", "orange"].forEach((color, i) => {
  const card = document.createElement("div");
  card.className = `card ${color} medium`;
  card.style.left = `${i * 160}px`;
  card.style.top = "0px";
  card.dataset.index = i;
  dashboard.appendChild(card);
  cards.push(card);
});

let draggingCard = null;
let resizing = false;
let startX, startY;
let startLeft, startTop;

cards.forEach(card => {
  card.addEventListener("pointerdown", e => {
    draggingCard = card;
    startX = e.clientX;
    startY = e.clientY;
    startLeft = parseInt(card.style.left, 10);
    startTop = parseInt(card.style.top, 10);
    card.setPointerCapture(e.pointerId);
  });

  card.addEventListener("pointermove", e => {
    if (draggingCard) {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      if (resizing) {
        const currentSize = sizes.find(s => draggingCard.classList.contains(s));
        let newSizeIndex = Math.max(0, Math.min(sizes.length - 1, sizes.indexOf(currentSize) + (dx > 20 || dy > 20 ? 1 : dx < -20 || dy < -20 ? -1 : 0)));
        if (!draggingCard.classList.contains(sizes[newSizeIndex])) {
          draggingCard.classList.remove(...sizes);
          draggingCard.classList.add(sizes[newSizeIndex]);
        }
      } else {
        draggingCard.style.left = `${startLeft + dx}px`;
        draggingCard.style.top = `${startTop + dy}px`;
      }
    }
  });

  card.addEventListener("pointerup", () => {
    draggingCard = null;
    resizing = false;
  });

  card.addEventListener("dblclick", () => {
    resizing = true;
  });
});

document.body.addEventListener("pointerdown", e => {
  if (![...cards].includes(e.target)) {
    resizing = false;
  }
});
