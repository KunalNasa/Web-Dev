for(var i = 0; i < document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function ()
{
    // var audio = new Audio('sounds/crash.mp3');
    // audio.play();
    // alert("I got clicked");
    this.style.color = "silver";
     
});
}



// function handleClick()
// {
//     alert("I got clicked");
// }