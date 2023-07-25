const btnEl = document.querySelector("#start");
const btnStop = document.querySelector("#stop");
const colorEl = document.querySelector("#color");
const bodyEl = document.body;


function generateColorCode() {
  let color = "#";
  let cVariable = "123456789abcdef";

  for (let i = 0; i <= 5; i++) {
    let cha = cVariable.charAt(Math.floor(Math.random() * 16));
    color += cha;
  }
  bodyEl.style.backgroundColor = color;
  colorEl.innerHTML = color;
  btnEl.style.color=color;
  
}

var toggle = () => {
  one = setInterval(generateColorCode, 600);
};

btnStop.addEventListener("click", () => {
  clearInterval(one);
  btnEl.style.color="white"
  btnStop.style.color=color;
});

btnEl.addEventListener("click", toggle);


