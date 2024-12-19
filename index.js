const input = document.getElementById("input");
const error = document.getElementById("error");
const result = document.getElementById("result")

let errorTime;
function updateResults() {
  console.log(input.value);
  if (input.value < 0 || isNaN(input.value)) {
    error.innerHTML = "Please enter a correct or valid number";
    clearTimeout(errorTime)
    errorTime = setTimeout(() => {
        error.innerHTML = ""
        input.value = ""
    }, 2000);
  }else{
    result.innerHTML = (input.value/2.2).toFixed(2)
  }
}
input.addEventListener("input", updateResults);
