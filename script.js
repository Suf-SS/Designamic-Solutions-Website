document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById("mySidebar");
  const overlay = document.getElementById("overlay");

  window.w3_open = function () {
    sidebar.style.display = "block";
    overlay.style.display = "block";
  }

  window.w3_close = function () {
    sidebar.style.display = "none";
    overlay.style.display = "none";
  }
});
