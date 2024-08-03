let myInput = document.querySelector("input");
let myButton = document.querySelector("button");
let myDiv = document.querySelector(".show");
let img = document.querySelector("img");
let myH1 = document.querySelector(".showText");



myButton.addEventListener("click", () => {

    if(myInput.value < 100 && myInput.value >= 0) {
        fetch(`https://api.imgflip.com/get_memes`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
                let x = data.data.memes[myInput.value]
                let result = `
                <h1 class = "bg-black text-warning"> ${x.name} </h1>
                <img src = ${x.url} class = "rounded" width = "100%"/>
                `
                myDiv.innerHTML = result;
            })
    }else if (myInput.value <= 100){
        myDiv.innerHTML = "Please Inter Number from 0 to 99";
    } else {
        myDiv.innerHTML = "Invalid Number";
    }
    })







// myButton.addEventListener("click", () => {

//     if(myInput.value < 100) {
//         fetch(`https://api.imgflip.com/get_memes`)
//         .then((res) => {
//         return res.json();
//         })
//         .then((data) => {
//             let x = data.data.memes[myInput.value]
//             console.log(x)
//             let result = 
//             img.src = `${x.url}`;
//             myH1.innerHTML = `${x.name}`;

//             myDiv.innerHTML += result
//         })
//     }else if (myInput.value > 100) {
//         myH1.innerHTML = "error"
//     }
// })
