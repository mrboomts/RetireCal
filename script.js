const dashboard = document.getElementById("dashboard");
let dragged = null;

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("dragstart", e => {
    dragged = card;
    setTimeout(() => card.style.display = "none", 0);
  });
  card.addEventListener("dragend", e => {
    card.style.display = "block";
    dragged = null;
  });
});

dashboard.addEventListener("dragover", e => e.preventDefault());

dashboard.addEventListener("drop", e => {
  e.preventDefault();
  if (e.target.classList.contains("card") && dragged) {
    dashboard.insertBefore(dragged, e.target.nextSibling);
  } else {
    dashboard.appendChild(dragged);
  }
});