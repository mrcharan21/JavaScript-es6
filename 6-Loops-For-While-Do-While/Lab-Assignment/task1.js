// write a JavaScript program using a for loop to print numbers from 1 to 10. Create a JavaScript 
//program that uses a while loop to sum all even numbers 

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let sum = 0;
let j=1;
while (j <= 10) {
    if (j % 2 === 0) {
        sum += j;
    }
    j++;
}
console.log("Sum of even numbers from 1 to 10 is : "+ sum);
