console.log("Hey");

// You are tasked with writing a function that doubles each element in 
// an array. However, there's a catch: if the array contains consecutive 
// duplicate elements, only double one of them.

// let arr = [1, 2, 3, 4, 5, 10, 31, 1, 3, 4];
// let hash = {};
// for(var i = 0; i < arr.length; i++)
// {
//     if(hash[arr[i]])
//     {
//         continue;
//     }
//     else
//     {
//         hash[arr[i]] = 1;
//         arr[i] = 2 * arr[i];
//     }
// }
// console.log(arr);


// Imagine you have a string, and you need to create a new string that 
// is a mirror image of the original. Write a function that appends the 
// reversed version of the original string to itself.

// let str = "abcd";
// let temp = "";
// for(var i = str.length - 1; i >= 0; i--)
// {
//     temp = temp + str[i];
// }
// console.log(str + temp);

// You are building a password validation feature. Create a function that 
// checks if a given password meets the following criteria: at least 8 
// characters long, contains both uppercase and lowercase letters, and 
// includes at least one digit.

// a - z -> 97 - 112
// A - Z -> 65 - 90
// char -> 0 - 9 -> 48 - 57

// let pass = "Kunal123"
// // your pass must contain atleast one uppercase and a number
// let hash = {
//     "capital" : 0,
//     "num" : 0
// }

// if(pass.length >= 8)
// {
//     for(var i = 0; i < pass.length; i++)
//     {
//         if(pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90)
//         {
//             hash["capital"]++;
//         }
//         else if(pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57)
//         {
//             hash["num"]++;
//         }
//     }
//     if(hash["capital"] == 0 || hash["num"] == 0)
//     {
//         console.log("Your password does not follows our instructions");
//     }
//     else
//     {
//         console.log("Password created");
//     }
// }
// else
// {
//     console.log("Password should contain more than 8 letters")
// }

// The Vowel Counter:
//You need to create a function that counts the number of vowels
//in a given string. Consider both uppercase and lowercase vowels.

// let str = "aeioAEIObcdef";
// let count = 0;
// for(var i = 0; i < str.length; i++)
// {
//     if(str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O'
//     || str[i] == 'U' || str[i] == 'a' || str[i] == 'e'|| str[i] == 'i'||
//     str[i] == 'o'|| str[i] == 'u')
//     {
//         count++;
//     }
// }
// console.log(count);