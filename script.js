
const cards = document.querySelectorAll(".card");
let draggingCard = null;

cards.forEach((card) => {
    card.addEventListener("dragstart", () => {
        draggingCard = card;
        card.classList.add("dragging");
    });

    card.addEventListener("dragend", () => {
        draggingCard = null;
        card.classList.remove("dragging");
    });

    card.addEventListener("touchstart", (e) => {
        draggingCard = card;
        card.classList.add("dragging");
        e.preventDefault();
    });

    card.addEventListener("touchmove", (e) => {
        if (!draggingCard) return;
        const touch = e.touches[0];
        draggingCard.style.position = "absolute";
        draggingCard.style.left = `${touch.pageX - 100}px`;
        draggingCard.style.top = `${touch.pageY - 75}px`;
    });

    card.addEventListener("touchend", () => {
        draggingCard.classList.remove("dragging");
        draggingCard.style.position = "relative";
        draggingCard.style.left = "";
        draggingCard.style.top = "";
        draggingCard = null;
    });
});
