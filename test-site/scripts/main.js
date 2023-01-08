const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/call-of-the-night.png") {
    myImage.setAttribute("src", "images/shikimori.png");
  } else {
    myImage.setAttribute("src", "images/call-of-the-night.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `My neverending geek list, ${myName}`;
    }
  }  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `My neverending geek list, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };
  
  