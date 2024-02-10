let icon = document.querySelector(".icon");
let nav = document.querySelector("nav");
function switching(){
    console.log(nav);
    nav.classList.toggle("boom");
}
icon.addEventListener("click",switching);
// ######
// let x = 7
// x == 5 ? console.log("hello") : console.log("not equal")

// function sayHello (userName , userAge = 25){
//     console.log(userName + userAge)
// }
// sayHello("batman")

let loader = document.getElementById("loader");

setTimeout(()=>{
    loader.style.display = 'none'
} , 4000)




