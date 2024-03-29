document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const hoverBorder = document.createElement("div");
    hoverBorder.id = "hover-border";
    var nav = document.querySelector("nav"); // Select the <nav> element
    const parentBounds = nav.parentElement.getBoundingClientRect(); // Get the bounds of the parent element
    nav.appendChild(hoverBorder);
    const padding = 0; // Padding around the hovered element

    const setHoverBorderStyle = (element) => {
      const bounds = element.getBoundingClientRect();
      hoverBorder.style.width = `${bounds.width + padding * 2}px`; // Add padding to width
      hoverBorder.style.height = `${bounds.height + padding * 2}px`; // Add padding to height
      hoverBorder.style.top = `${bounds.top + window.scrollY - padding}px`; // Subtract padding from top
      hoverBorder.style.left = `${
        bounds.left + window.scrollX - parentBounds.left - padding
      }px`; // Subtract padding from left
      hoverBorder.style.opacity = "1"; // Show the hoverBorder
    };

    const primaryNavLinks = document.querySelectorAll(".primary-nav a");
    primaryNavLinks.forEach((item) => {
      item.addEventListener("mouseenter", (e) => setHoverBorderStyle(e.target));
      item.addEventListener("mouseleave", () => {
        const selectedElement = document.querySelector(
          ".primary-nav li.selected a"
        );
        if (selectedElement) {
          setHoverBorderStyle(selectedElement);
        } else {
          hoverBorder.style.opacity = "0"; // Hide the hoverBorder
        }
      });
    });

    // Check if any <li> element has a "selected" class
    const selectedElement = document.querySelector(
      ".primary-nav li.selected a"
    );
    if (selectedElement) {
      setTimeout(() => {
        setHoverBorderStyle(selectedElement);
      }, 500); // 3000 milliseconds = 3 seconds
    }
  }, 500);
});
