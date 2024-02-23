document.addEventListener("DOMContentLoaded", () => {
  const hoverBorder = document.createElement("div");
  hoverBorder.id = "hover-border";
  var nav = document.querySelector("nav"); // Select the <nav> element
  const parentBounds = nav.parentElement.getBoundingClientRect(); // Get the bounds of the parent element
  nav.appendChild(hoverBorder);
  const padding = 5; // Padding around the hovered element
  document.querySelectorAll(".primary-nav a").forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
      const bounds = e.target.getBoundingClientRect();
      hoverBorder.style.width = `${bounds.width + padding * 2}px`; // Add padding to width
      hoverBorder.style.height = `${bounds.height + padding * 2}px`; // Add padding to height
      hoverBorder.style.top = `${bounds.top + window.scrollY - padding}px`; // Subtract padding from top
      hoverBorder.style.left = `${
        bounds.left + window.scrollX - parentBounds.left - padding
      }px`; // Subtract padding from left
    });
  });
});
