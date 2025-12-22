const btns = document.getElementById("btn-container").querySelectorAll(".btn");
console.log(btns);

for(let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.querySelector(".active");
    if(current) {
      current.classList.remove("active");
    }
    this.classList.add("active");
  });
};


