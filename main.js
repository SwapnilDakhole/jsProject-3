// console.log("Hello world");
// console.log("script start");

// for(let i=0; i<1000;i++){
//     console.log("inside for loop");
// }
// console.log("script end");

// console.log("script start");

// const id = setTimeout(()=>{
//         console.log("inside setTimeout");
//         for(let i=0; i<1000;i++){
//     console.log("inside for loop");
// }
// },500)
// console.log("script end");

console.log("script start");

// const intervalId = setInterval(() => {
//     console.log("inside setInterval");
//     // for(let i=0; i<1000;i++){
//     //         console.log("inside for loop");
//     //     }
// },100);
// console.log("script end");

const body = document.body;
const button = document.querySelector("button");

const intervalId = setInterval(()=>{
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
        const randomColor = `rgb(${red},${green},${blue})`;
        body.style.backgroundColor = randomColor;
},500);

button.addEventListener("click",()=>{
    clearInterval(intervalId);
    button.textContent = body.style.backgroundColor;
})


