import "./style.css";
const adviceWrapper = document.querySelector(".advice");
const adviceId = document.querySelector(".advice__id");
const advicegen = document.querySelector(".advice__gen");
const getAdvice = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    const { advice, id } = data.slip;
    adviceWrapper.textContent = `"${advice}"`;
    adviceId.innerText = id;
  } catch (error) {
    console.log(error);
    alert("api not working");
  }
};
advicegen.addEventListener("click", () => {
  getAdvice();
});
import themeSwitcher from "./components/themeToggle";
themeSwitcher();
