let flag = true;
let bulbOFF = "<img src='bulbOFF.webp' alt='Bulb OFF'>"
let bulbON = "<img src='bulbON.webp' alt='Bulb ON'>"

document.getElementById("toggle").addEventListener("click", () =>{
    if(flag == true)
    {
        flag = false;
        document.querySelector(".container").innerHTML = bulbOFF;
    }
    else
    {
        flag = true;
        document.querySelector(".container").innerHTML = bulbON;
    }
})
 
