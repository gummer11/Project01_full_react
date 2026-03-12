// JS1
const btn = document.getElementById("btn");
let isBtnClicked = false;

btn.addEventListener("click", () => {
  // btn.style.background = '#fef6f5';
  // btn.style.color = '#f55153';
  //btn.innerText = 'Clicked!'
  btn.textContent = isBtnClicked ? "Change Me" : "Clicked";
  btn.style.backgroundColor = isBtnClicked ? "#f55153" : "#fef6f5";
  btn.style.color = isBtnClicked ? "#fef6f5" : "#f55153";

  isBtnClicked = !isBtnClicked;
});
// JS1 vége
/*id="btn8"
style={{
  backgroundColor: mutasd ? "white" : "#f55153",
  color: mutasd ? "#f55153" : "white",
}}
className="btns18"
onClick={() => setMutasd(!mutasd)}
>
{mutasd ? "Nincs titok! :)" : "Mutasd a titkot!"}*/
