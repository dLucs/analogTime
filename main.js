const angle = 6;
const hour = document.querySelector("#hr");
const minutes = document.querySelector("#min");
const seconds = document.querySelector("#sec");

setInterval(() => {
  const date = new Date();
  const hr = date.getHours() * 30;
  const min = date.getMinutes() * angle;
  const sec = date.getSeconds() * angle;

  hour.style.transform = `rotateZ(${hr + min / 12}deg)`;
  minutes.style.transform = `rotateZ(${min}deg)`;
  seconds.style.transform = `rotateZ(${sec}deg)`;
});
