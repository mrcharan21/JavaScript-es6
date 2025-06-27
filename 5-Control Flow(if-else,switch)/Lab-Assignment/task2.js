// javascript program to display the day of the week using switch case

let dayNumber = parseInt(prompt("Enter a number between 1 and 7:"));

let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
        default:
            dayName = "Invalid input";
}
alert(dayName);