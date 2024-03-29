let button = document.getElementById("btn");
button.addEventListener("dblclick", () => {
    alert("I was clicked");
    button.style.backgroundColor = "red";
})

button.addEventListener("keydown", (e) => {
    console.log(e.key, e.keyCode);
})