// 1. form 과 ul을 JS로 가져와
const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

// 2. form 이 submit 되었을 때, li 저장

const toDoLists = [];
function handleToDoSubmit(event) {
  event.preventDefault();
  //   input의 현재 value 를 새로운 변수에 복사
  const newTodo = toDoInput.value;
  toDoInput.value = "";
}

console.log(toDoLists);
toDoForm.addEventListener("submit", handleToDoSubmit);
