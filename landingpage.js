document.addEventListener("DOMContentLoaded", function () {
  const toggleIcons = document.querySelectorAll(".fa-plus, .fa-minus");

  toggleIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const answer = this.parentElement.parentElement.querySelector(".answer");
      const plusIcon = this.parentElement.querySelector(".fa-plus");
      const minusIcon = this.parentElement.querySelector(".fa-minus");

      answer.classList.toggle("show");

      if (plusIcon.style.display === "none") {
        plusIcon.style.display = "inline-block";
        minusIcon.style.display = "none";
      } else {
        plusIcon.style.display = "none";
        minusIcon.style.display = "inline-block";
      }
    });
  });
});
