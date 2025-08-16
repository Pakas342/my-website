// Custom cursor configuration and behavior
function initCursor() {
  const cursor = document.querySelector(".custom-cursor");
  const textElements = document.querySelectorAll("p:not(.nav-item p), h1, h2");
  const pointerElements = document.querySelectorAll(".nav-item, .social-link");

  // Track mouse movement
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX - 12.5 + "px";
    cursor.style.top = e.clientY - 12.5 + "px";
  });

  // Text hover (line cursor)
  textElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      const fontSize = parseFloat(window.getComputedStyle(el).fontSize);
      const lineHeight = fontSize * 1.2;

      cursor.style.height = lineHeight + "px";
      cursor.classList.add("text-hover");
    });

    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("text-hover");
      cursor.style.height = "";
    });
  });

  // Pointer hover (accent circle)
  pointerElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("pointer-hover");
    });

    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("pointer-hover");
    });
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initCursor);

