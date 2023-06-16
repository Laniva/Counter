let incrementBtn = document.querySelector("#btn1")
let decrementBtn = document.querySelector("#btn2")
let resetBtn = document.querySelector("#btn3")
let size = document.querySelector("#value")

let count= 0
  function increment(){
     count++
     size.innerHTML = count;
     if (count > 0) {
        value.style.color = "green";
      }
      if (count === 0) {
        value.style.color = "black";
      }
  }
  function decrement(){
     count--
     value.innerHTML = count;
     if (count < 0) {
        value.style.color = "red";
      }
      if (count === 0) {
        value.style.color = "black";
      }
  }
  function reset(){
     count=0
     value.innerHTML = count;
     if (count === 0) {
        value.style.color = "black";
      }
  }

incrementBtn.addEventListener("click", () => {
  increment()
});
decrementBtn.addEventListener("click", () => {
  decrement()
});
resetBtn.addEventListener("click", () => {
  reset()
})


