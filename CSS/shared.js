var backdrop = document.querySelector(".backdrop");
var selectPlanButtons = document.querySelectorAll(".plan button");
var modal = document.querySelector(".modal");
var noButton = document.querySelector(".modal button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

console.dir(noButton);

function closeModal() {
  // modal.style.display = "none";
  // backdrop.style.display = "none";
  backdrop.classList.remove("open");
  if (modal) {
    modal.classList.remove("open");
  }
}

toggleButton.addEventListener("click", function () {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});

backdrop.addEventListener("click", function () {
  // mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

if (noButton) {
  noButton.addEventListener("click", () => {
    backdrop.classList.remove("open");
    if (modal) {
      modal.classList.remove("open");
    }
  });
}

if (backdrop) {
  backdrop.addEventListener("click", closeModal());
}

for (let index = 0; index < selectPlanButtons.length; index++) {
  selectPlanButtons[index].addEventListener("click", function () {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    backdrop.classList.add("open");
    if (modal) {
      modal.classList.add("open");
    }
  });
}
