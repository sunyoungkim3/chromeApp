const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const loginBtn= document.querySelector(".login-form button");

function onBtnClick(){
  console.log(loginInput.value);
  console.log("clicked!");
}
loginBtn.addEventListener("click", onBtnClick);
