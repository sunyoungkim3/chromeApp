const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
//문자열로 이루어진 변수만 포함하는 변수명은 대문자로 작성
const USERNAME_KEY ="username"; // 2번이상 반복되는 문자열은 변수화 하여 사용하는것이 안전
const existUserName = localStorage.getItem(USERNAME_KEY);


function onHandleSubmit(event) {
  event.preventDefault(); //브라우저의 기본 동작 멈추고 원하는 동작 가능
  const userName = loginInput.value; //loginInput value를 userName이라는 변수에 저장
  localStorage.setItem(USERNAME_KEY, userName); //Key, value 형태로 작성
  loginForm.classList.toggle(HIDDEN_CLASSNAME); //loginForm의 class name에 hidden 포함.
  greeting.innerText = `Hello ${userName}`; //비어있는 h1 태그를 불러다가 안에 내용 채워주기
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (existUserName === null) {
  //localStorage.getItem("userName")에 value 값이 없으면 null 출력
  loginForm.addEventListener("submit", onHandleSubmit);
} else {
  loginForm.classList.toggle(HIDDEN_CLASSNAME); //loginForm의 class name에 hidden 포함.
  greeting.innerText = `Hello ${existUserName}`; //비어있는 h1 태그를 불러다가 안에 내용 채워주기
  greeting.classList.remove(HIDDEN_CLASSNAME);
}



// **로직
// if(existUserName === null){
//   form 출력
// }else{
//   greeting 출력
// }