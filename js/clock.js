const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  // date.getHours()값을 string으로 변형. 자리수가 0 이하면 0 추가
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  //   console.log(`${hours}:${minutes}:${seconds}`);
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
  // console.log(date.getSeconds());
}

setInterval(getClock, 5000);
// intervals: 주기적으로 발생하는 event
//  (실행하려는 함수, ms)

getClock();

// timeout:

// setTimeout(sayHello, 000);

// "1".padStart(2,"0") : 1이라는 string 이 2보다 작을 때, 앞에 0을 추가한다.
//  "hello".padStart(20,"x"): "xxxxxxxxxxxxxxhello"
// "1".padEnd(2,"0") : 1이라는 string 이 2보다 작을 때, 0을 추가한다.
