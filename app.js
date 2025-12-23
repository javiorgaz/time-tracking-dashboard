import {timeData} from './data.js'

const btns = document.querySelectorAll(".btn");
console.log(btns);

const items = document.querySelectorAll(".main-grid > *:not(:first-child)");

for(let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.querySelector(".active");
    if(current) {
      current.classList.remove("active");
    }
    this.classList.add("active");
  });
};


btns.forEach(function(btn) {
  btn.addEventListener("click",function() {
    for(let i = 0; i < items.length; i++) {

      const optionEl = items[i].querySelector("#option");
      const currentEl = items[i].querySelector("#hours");
      const lastEl = items[i].querySelector("#last-week");

      optionEl.textContent = timeData[i].title;
      currentEl.textContent = timeData[i].timeframes[btn.id].current + "h";
      lastEl.textContent = timeData[i].timeframes[btn.id].previous + "hrs";
    }
  });
});





