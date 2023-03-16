let counter;
let startTime;
let spenTimeDisplay;
let timeSpend;

const tiemElement = document.getElementById("time");
const showCounter = () => {
  tiemElement.innerText = "00 : 00";
  clearInterval(spenTimeDisplay);
  counter = 3;
  const counterElement = document.getElementById("counter");
  const counterOverlay = document.getElementById("counterOverlay");
  counterOverlay.classList.remove("hidden");
  counterOverlay.classList.add("flex");
  const setCountDown = setInterval(() => {
    if (counter == -1) {
      counterElement.innerText = "";
    } else {
      counterElement.innerText = counter;
    }

    if (counter == -1) {
      counter = 3;
      startTime = new Date().getTime();
      document.addEventListener("keyup", typeInput);
      clearInterval(setCountDown);
      counterOverlay.classList.add("hidden");
      counterOverlay.classList.remove("flex");
      calculateTime();
    }
    counter--;
  }, 1000);
};

const calculateTime = () => {
  spenTimeDisplay = setInterval(() => {
    timeSpend = Math.floor((new Date().getTime() - startTime) / 1000);
    const convMin = Math.floor(timeSpend / 60);
    const mod = timeSpend % 60;
    const min = convMin.toString().length == 1 ? `0${convMin}` : convMin;
    const second = mod.toString().length == 1 ? `0${mod}` : mod;

    tiemElement.innerText = `${min} : ${second}`;

    if (timeSpend > 60) {
      if (timeSpend % 2 == 0) {
        tiemElement.classList.add("text-red-700");
        tiemElement.classList.remove("text-red-300");
      } else {
        tiemElement.classList.remove("text-red-700");
        tiemElement.classList.add("text-red-300");
      }
    }
  }, 1000);
};

const typeInput = (e) => {
  console.log(e.key);
  console.log(questionText);
};

document.getElementById("start").addEventListener("click", () => {
  showCounter();
});

document.getElementById("refresh").addEventListener("click", () => {
  loadQuote();
  clearInterval(spenTimeDisplay);
  tiemElement.innerText = "00:00";
});
