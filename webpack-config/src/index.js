import "./css/a.css"
import "./css/b.css"
const img1 = require("./images/_39A2886.JPG");
const img2 = require("./images/avatar.png");
console.log(img2)
// 将两张图片插入到body下
const body = document.querySelector("body");
const img1Ele = document.createElement("img");
img1Ele.style.height = "400px"
img1Ele.src = img1.default;
const img2Ele = document.createElement("img");
img2Ele.style.width = "200px"
img2Ele.src = img2.default;
body.appendChild(img1Ele);
body.appendChild(img2Ele);

function sayHello(name) {
  console.log("Hello, " + name);
}
sayHello("John");
