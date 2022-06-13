const images = ["1.jpg", "2.jpg", "3.jpg"];

const imageRandomNum = Math.floor(Math.random() * images.length);
console.log(imageRandomNum);

const image = document.createElement("img");

image.src = `img/${images[imageRandomNum]}.jpg`;
