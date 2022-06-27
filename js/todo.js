// 1. form 과 ul을 JS로 가져와
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

// 2. form 이 submit 되었을 때, li 저장

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

// Todo를 삭제하는 func
function handleDeleteTodo(event) {
  const li = event.target.parentElement;
  console.log(event.target.parentElement);
  li.remove();
}

// handleToDoSubmit에서 newTodo 를 인자로 받아 사용
function paintTodo(newTodo) {
  // li, span생성
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", handleDeleteTodo);
  // li 내의 span 생성.
  li.appendChild(span);
  li.appendChild(button);
  toDoList.append(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  //   input의 현재 value 를 새로운 변수에 복사
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintTodo(newTodo);
  saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// TODK: list 저장. list 삭제 버튼
