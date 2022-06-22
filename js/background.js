const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// html에 없는 요소 생성: createElement
const bgImage = document.createElement("img");

// <img src="/img/1.jpg" />
bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

// bgImage를 body 내부에 추가
document.body.appendChild(bgImage);
