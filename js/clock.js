const clock = document.querySelector("#clock");

// intervals: 주기적으로 발생하는 event
function getClock() {
  const date = new Date();
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

setInterval(getClock, 1000);

getClock();

// timeout:

// setTimeout(sayHello, 000);
