document.addEventListener("mouseleave", function () {
  document.querySelector(".cursor").style.display = "none";
});

document.addEventListener("mouseenter", function () {
  document.querySelector(".cursor").style.display = "block";
});

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 100, fill: "forwards" }
  );
});
