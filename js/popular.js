document.addEventListener("DOMContentLoaded", function () {
  const linksList = document.querySelector(".popular__sort");
  const showBtn = document.getElementById("showBtn");

  // Проверяем, нужно ли показывать кнопку
  function checkButtonNeeded() {
    // Если высота содержимого больше высоты контейнера в свёрнутом состоянии
    if (linksList.scrollHeight > linksList.clientHeight) {
      showBtn.style.display = "block";
    } else {
      showBtn.style.display = "none";
    }
  }

  // Обработчик клика по кнопке
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

  // Проверяем при загрузке и при изменении размера
  checkButtonNeeded();
  window.addEventListener("resize", checkButtonNeeded);
});
