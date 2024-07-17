console.log("this is promise");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a < 0.5)
    {
        reject("Random Number is not in range");
    }

    setTimeout(() => {
        console.log("Yes I am done");
        resolve("Kunal");
    }, 3000);
    
})

prom1.then((a)=>{
    console.log(a);
}).catch((err) => {
    console.log(err);
})