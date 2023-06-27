const themeSwitcher = () => {
  const toggleBtn = document.querySelector(".theme__toggle");
  const theme = localStorage.getItem("mode");
  // Helper function to update the toggle button
  function updateToggleBtn(isLight) {
    toggleBtn.firstElementChild.classList.toggle("hide", isLight);
    toggleBtn.lastElementChild.classList.toggle("hide", !isLight);
  }

  function toggleTheme() {
    const isLight = document.body.classList.toggle("light");
    localStorage.setItem("mode", isLight ? "light" : null);
    updateToggleBtn(isLight);
  }

  // Apply the stored theme on page load
  if (theme === "light") {
    document.body.classList.add("light");
    updateToggleBtn(true);
  }

  toggleBtn.addEventListener("click", toggleTheme);
};
export default themeSwitcher;
