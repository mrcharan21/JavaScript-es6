//Wap to find the sum of all elements in an array of numbers

let numbers = [1,2,3,4,5];
let sum = 0;

for (let i =0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("The sum of all elements in the array is: " + sum);