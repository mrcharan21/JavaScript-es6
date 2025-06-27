//Write a do-while loop that continues to ask the user for input until they enter a number greater than 10.

let number;

do {
    number = parseInt(prompt("please enter a number greater than 10:"));
    if (number <=10){
        alert("Invalid input, please try again.");
    }
}while (number <= 10);
alert("You entered a number greater than 10: " + number);