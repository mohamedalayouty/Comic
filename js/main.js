let myInput = document.querySelector("input");
let myButton = document.querySelector("button");
let myDiv = document.querySelector(".show");

myButton.ddEventListener("click", () => {
    myDiv.innerHtml = myInput.value;
    console.log(myDiv)
})

// fetch("https://api.imgflip.com/get_memes")

