document.addEventListener("DOMContentLoaded", function () {
  const nose = document.getElementById("boopNose");

  nose.addEventListener("click", function (e) {
    const container = document.querySelector(".photo-container");
    const rect = container.getBoundingClientRect();

    for (let i = 0; i < 3; i++) {
      const sparkle = document.createElement("div");
      sparkle.classList.add("sparkle");

      // Position sparkles around the click position
      sparkle.style.left = `${e.clientX - rect.left + (Math.random() * 40 - 20)}px`;
      sparkle.style.top = `${e.clientY - rect.top + (Math.random() * 40 - 20)}px`;

      container.appendChild(sparkle);

      // Remove sparkle after animation completes
      setTimeout(() => sparkle.remove(), 1000);
    }
  });
});
