document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#menuButton");
  const nav = document.querySelector("nav");

  menuButton.addEventListener("click", () => {
    nav.classList.toggle("show");
  });


  function handleResize() {
    if (window.innerWidth >= 1000) {
      nav.classList.add("show");
    } else {
      nav.classList.remove("show");
    }
  }
  handleResize();
  window.addEventListener("resize", handleResize);
});

const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
  img.addEventListener("click", () => {
    const dialog = document.createElement("dialog");
    dialog.classList.add("viewer");

    dialog.innerHTML = `
      <img src="${img.src}" alt="${img.alt}">
      <button class="close-viewer">X</button>
    `;

    document.body.appendChild(dialog);

    dialog.showModal();

    const closeButton = dialog.querySelector(".close-viewer");
    closeButton.addEventListener("click", () => {
      dialog.close();
      dialog.remove(); 
    });
  });
});