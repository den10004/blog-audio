const headerModal = document.getElementById("myModal");
const sortModal = document.getElementById("sortModal");
const callback = document.getElementById("callback");

function openHeaderMenu() {
  headerModal.classList.add("active");
}

function openSort() {
  sortModal.classList.add("active");
}

function openCallbackMenu() {
  callback.classList.add("active");
}

function closeModal() {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    modal.classList.remove("active");
  });
}

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
