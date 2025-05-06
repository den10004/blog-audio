document.addEventListener("DOMContentLoaded", function () {
  const linksList = document.querySelector(".popular__sort");
  const showBtn = document.getElementById("showBtn");

  function checkButtonNeeded() {
    if (linksList.scrollHeight > linksList.clientHeight) {
      showBtn.style.display = "block";
    } else {
      showBtn.style.display = "none";
    }
  }

  showBtn.addEventListener("click", function () {
    linksList.classList.toggle("collapsed");
    linksList.classList.toggle("expanded");
    showBtn.classList.toggle("expanded");

    if (linksList.classList.contains("expanded")) {
      showBtn.textContent = "Скрыть";
    } else {
      showBtn.textContent = "Показать все";
    }
  });

  checkButtonNeeded();
  window.addEventListener("resize", checkButtonNeeded);
});
