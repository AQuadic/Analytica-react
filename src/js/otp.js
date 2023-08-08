
const time = document.getElementById("counter");
const resend = document.getElementById("resend");
const ss = document.getElementById("ss");
console.log("jjj");
const starttime = 2;
let secound = starttime * 60;

const myTimeout = setInterval(udtime, 1000);
/*ss.addEventListener('click' , function (e) {
     e.preventDefault();
     const myTimeout = setInterval(udtime, 1000);
  })*/
function udtime() {
  const min = Math.floor(secound / 60);
  let sec = secound % 60;
  sec = sec < 10 ? "0" + sec : sec;
  if (min === 0 && sec == "00") {
    clearInterval(myTimeout);
    resend.disabled = false;
    resend.classList.add("resend");
    time.classList.add("red");
  } else {
    resend.classList.remove("resend");
    time.classList.remove("red");
  }

  time.innerHTML = `0${min} : ${sec} s`;
  secound--;
}
