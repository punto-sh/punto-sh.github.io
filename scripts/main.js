const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/image1.jpg") {
    myImage.setAttribute("src", "images/foto2.jpeg");
  } else {
    myImage.setAttribute("src", "images/image1.jpg");
  }
};

