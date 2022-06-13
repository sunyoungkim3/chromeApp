const clock = document.querySelector("#clock");

// intervals: 주기적으로 발생하는 event
function getClock() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  console.log(`${hours}:${minutes}:${seconds}`);
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(getClock, 1000);

getClock();

// timeout:

// setTimeout(sayHello, 000);

// "1".padStart(2,"0") : 1이라는 string 이 2보다 작을 때, 앞에 0을 추가한다.
//  "hello".padStart(20,"x"): "xxxxxxxxxxxxxxhello"
// "1".padEnd(2,"0") : 1이라는 string 이 2보다 작을 때, 0을 추가한다.
