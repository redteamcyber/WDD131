document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#menuButton");
  const nav = document.querySelector("nav");

  // Toggle nav visibility when button is clicked
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Optional: handle window resizing
  function handleResize() {
    if (window.innerWidth >= 1000) {
      nav.classList.add("show"); // always show on large screens
    } else {
      nav.classList.remove("show"); // hide on small screens
    }
  }

  // Run once when the page loads
  handleResize();

  // Recheck when the window is resized
  window.addEventListener("resize", handleResize);
});
