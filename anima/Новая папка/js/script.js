function openTab(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
  setTimeout(function() {
    modal.style.opacity = 1;
  }, 10); // Ensure animation plays

  // Закрытие при клике за пределами контента
  window.onclick = function(event) {
    if (event.target === modal) {
      closeModal(modal);
    }
  }
}

function closeTab(modalId) {
  var modal = document.getElementById(modalId);
  closeModal(modal);
}

function closeModal(modal) {
  modal.style.opacity = 0;
  setTimeout(function() {
    modal.style.display = "none";
  }, 400); // Match CSS animation
}
