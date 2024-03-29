async function randomDelay() {
    return new Promise((resolve) => { // it is an async function with some waiting time
        var delay = 1 + 2 * Math.random(); // var to set waiting time
        setTimeout(() => { // adding waiting time.
            resolve(); // resolve the promise in setting timeout function so that
            // timeout function is executed and promise is returned after that.
        }, delay * 1000);
    });
}
// make async function to add div to the body with innerhtml as text sent to this 
// function
const addItem = async (item) => {
    await randomDelay(); // wait for randomdelay before moving ahed.
    let cont = document.createElement("div"); // create div element 
    cont.innerHTML = item; // add text to the div element 
    document.body.append(cont); // append that div element in the body of html
}
async function main() {
    // set interval time so that the method written in this func executed repeatedly in 
    // that time interval
    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div"); // to get div elements
        last = last[last.length - 1]; // to get last div element of body
        if(last.innerHTML.endsWith("...")) //if 3 dots present slice that 3 dots else add a dot
        {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
        }
        else
        {
            last.innerHTML = last.innerHTML + ".";
        }
    }, 200);

    let item = ["Initialized Hacking and retrieving data",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"]
    for (const i of item) {
        // calling addItem function for each item of text(item) array; 
        await addItem(i);
    }
    await randomDelay(); // wait for the last text element for blinking dots
    clearInterval(t); // stop the repeating interval
    // let  b = document.querySelector("body");
    // b.style.backgroundColor = "black";
    document.body.innerHTML = "";
    document.body.style.backgroundImage = "url('hacker2.jpeg')";
    document.body.style.backgroundSize = "cover"; // Cover the entire background
    document.body.style.backgroundRepeat = "no-repeat"; 


    var audio = new Audio('hackerMusic.mp3');
    document.body.addEventListener('click', function() {
        audio.play();
    });

}
main();