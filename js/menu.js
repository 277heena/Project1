// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById("menu-toggle");
  var mainMenu = document.getElementById("main-menu");

  if (menuButton && mainMenu) {
    menuButton.addEventListener("click", function () {
      mainMenu.classList.toggle("show");
    });
  }
});
