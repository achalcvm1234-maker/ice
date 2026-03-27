// Ensure the DOM is loaded before accessing elements
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return; // safety check

  searchInput.onkeyup = () => {
    const v = searchInput.value.toLowerCase();

    document.querySelectorAll(".card").forEach(c => {
      c.style.display = c.innerText.toLowerCase().includes(v) ? "block" : "none";
    });
  };
});