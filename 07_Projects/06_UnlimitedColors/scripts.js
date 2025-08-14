const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;

const changeBgColor = function () {
  if (!intervalId) {
    intervalId = setInterval(startChange, 1000);
  }
  function startChange(){
  document.body.style.backgroundColor = randomColor();
  }
};

const stopBgColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", changeBgColor);
document.querySelector("#stop").addEventListener("click", stopBgColor);
