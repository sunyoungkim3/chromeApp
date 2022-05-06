const loginInput = document.querySelector(".login-form input");
const loginBtn= document.querySelector(".login-form button");

function onBtnClick(){
  const value = loginInput.value;
  console.log(value);
}
loginBtn.addEventListener("click", onBtnClick);
