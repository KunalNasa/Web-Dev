var a = prompt("Enter first number");

var b = prompt("Enter second number");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("OOPS!! you have enter invalid input type");
}
let sum = parseInt(a) + parseInt(b);

function main() {

    try {
        console.log("the sum is " + sum * x);
        return true;
    } catch (error) {
        console.log("error");
        return false;
    }
    finally {
        console.log("Files are closed");
    } // if we write the finally statetment then the code in the finally block will
    // be executed even after the function has returned its value.
    // if we dont use finally in function and want to do something after return statement
    // then that will not happen.

}
main();
// console.log(sum);
