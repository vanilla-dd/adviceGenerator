import "./style.css";
const adviceWrapper = document.querySelector(".advice");
const adviceId = document.querySelector(".advice__id");
const advicegen = document.querySelector(".advice__gen");
const getAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();
    adviceWrapper.textContent = `"${advice.slip.advice}"`;
    adviceId.innerText = advice.slip.id;
  } catch (error) {
    console.log(error);
    alert("api not working");
  }
};
advicegen.addEventListener("click", () => {
  getAdvice();
});
