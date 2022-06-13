const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetingMsg = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); //미니DB
  paintGreetings(username);
}

//  username을 인자로 받는 func
function paintGreetings(username) {
  greetingMsg.classList.remove(HIDDEN_CLASSNAME);
  greetingMsg.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// 4.6 lovalStorage에 username 이 있는지 확인하고
// **로직
// if(existUserName === null){
//   form 출력
// }else{
//   greeting 출력
// }
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

// 미니 DB
// localStorage.set Item("key","value")
// localStorage.getItem
