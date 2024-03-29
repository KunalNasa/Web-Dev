// var colors = ["red", "blue", "yellow", "orange", "gray"];
function getRandomColors()
{
    var val1 = Math.ceil(255 * Math.random());
    var val2 = Math.ceil(255 * Math.random());
    var val3 = Math.ceil(255 * Math.random());

    return `rgb(${val1}, ${val2}, ${val3})`
}


let boxes = document.querySelectorAll(".box");
for(var i = 0; i <= 4; i++)
{
    // var randNum = Math.floor(Math.random() * 5);
    // boxes[i].style.backgroundColor = colors[randNum];
    boxes[i].style.backgroundColor = getRandomColors();

    
    // var randNum2 = Math.floor(Math.random() * 5);
    boxes[i].style.color = getRandomColors();

}
