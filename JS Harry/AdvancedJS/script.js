async function sleep()
{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(45);
        }, 1000);
    });
}


// immediately invoke function expression (IIFE)
(async function main(){
    let a = await sleep();
    console.log(a);
    let b = await sleep();
    console.log(b);
})()    

//Destructuring
// let [x, y] = [1, 5, 7]; // x will be 1 and y will be 5
let [x,y, ...rest] = [1,5, 7, 8, 9, 10]; // x = 1, y = 5, rest = 7, 8, 9, 10
let obj = {
    a : 10,
    b : 20
};
let {a, b} = obj; // variable name should be same in obj destructuring
console.log(a, b);
console.log(x, y);

// spread operator
function sum(x, y, z)
{
    return x + y + z;
}
let arr = [1, 2, 3];
console.log(sum(arr[0], arr[1], arr[2]));
console.log(sum(...arr)); //spread the array
