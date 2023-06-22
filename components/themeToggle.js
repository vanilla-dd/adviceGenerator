const themeSwitcher = () => {
  const toggleBtn = document.querySelector(".theme__toggle");
  function toggleTheme() {
    document.body.classList.toggle("light");
    toggleBtn.firstElementChild.classList.toggle("hide");
    toggleBtn.lastElementChild.classList.toggle("hide");
  }
  toggleBtn.addEventListener("click", toggleTheme);
};
export default themeSwitcher;
