const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input-header");

searchBtn.addEventListener("click", () => {
  searchInput.classList.toggle("active");
  if (searchInput.classList.contains("active")) {
    searchInput.focus();
  }
});
