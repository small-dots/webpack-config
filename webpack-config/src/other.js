import "./css/a.css"
import "./css/b.css"
const img1 = require("./images/_39A2886.JPG");
// 将两张图片插入到body下
const body = document.querySelector("body");
const img1Ele = document.createElement("img");
img1Ele.style.height = "400px"
img1Ele.src = img1.default;
body.appendChild(img1Ele);

