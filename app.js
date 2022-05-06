const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

function onHandleSubmit(event){
  event.preventDefault();
  const useName = loginInput.value;
  console.log(event);
}

loginForm.addEventListener("submit",onHandleSubmit)

// 함수(): 브라우저가 강제로 실행시켜
// 브라우저 onHandleSubmit 호출 (info): 브라우저 내 event 정보를 가져와서 함수 실행
// 공간만 만들면, 방금 일어난 event에 대한 정보를 지닌 argument가 채워진다