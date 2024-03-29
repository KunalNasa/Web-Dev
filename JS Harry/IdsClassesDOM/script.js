console.log("Hey");
let boxes = document.getElementsByClassName("box");
console.log(boxes);
// boxes[3].style.backgroundColor = "red";
let redbox = document.getElementById("red-box");
redbox.style.backgroundColor = "red";
document.querySelector(".box").style.backgroundColor = "green"; // select 
//first element with class box

// let allbox = document.querySelectorAll(".box");
// for(var i = 0; i <= allbox.length; i++)
// {
//     allbox[i].style.backgroundColor = "gray";
// }

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "gray";
})

document.getElementsByTagName;