console.log("Hey you"); //executed first
console.log("Hi"); // executed second

setTimeout(() => {
    console.log("hello");
}, 2000); // wait for 2 sec

console.log("Namaste"); // executed third
//timeout funtion will be called now 


setTimeout(() => {
    console.log("hello again");
}, 1000); // it is an asynchronus function, therefore it will be executed after sync func.

console.log("Namaste again");



const fn = () => {
    console.log("Nothing");
}

const callback = (arg, fn) => {
    console.log(arg);
    fn();
}
const loadscript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Kunal", fn);
    document.head.append(sc); 


}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);