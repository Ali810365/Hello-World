//basic print to the console
console.log("Hello World");

//generating a random number using the Math.random function
let randomNumber = Math.random();
//next we print the random generated number to the console
console.log(randomNumber); 

//creating a condition statement with our random number
if (randomNumber < 0.5) {
    //if our number is less then 0.5 the following action will be executed 
    console.log("Hello Ali");
    console.log(randomNumber);

}

if (randomNumber >= 0.5) {
    //if our number is greater then or equal to 0.5 the followign action will be executed
    console.log('Random Number is greater than 0.5');
    console.log(randomNumber);

}



//creating a variable to represent our day of the week
const dayOfWeek = 'Monday';

//creating a condition statement involving an else if statement
if (dayOfWeek === 'Monday') {

    console.log('This is Monday');

} else if (dayOfWeek === 'Thursday') {

    console.log("This is Thursday");

} else if (dayOfWeek ===  'Saturday') {

    console.log("Hooray, today is Saturday");
}

//we can use prompts to manipulate variables
const age = prompt('ENTER AN AGE');

//depending on our age value, one of these statements will be performed
if (age < 5) {
    console.log("You Type Pretty Fast - 5 ");
} else if (age < 10) {
    console.log("Output of the logic compared to CASE STATEMENTS");
} else if (age < 35) {
    console.log("Output of the logic Mr Adult.");
}
//if none of the conditions above are valid then this statement will be performed
else {

    console.log("Last Resort If All Conditons Fail");
} 

//switch statements are another way to perform if/else statements. Faster and simpler terms
const expr = 'Papayas';

//we can use the variable above as argument
switch (expr) {

    case 'Oranges':
        console.log("Oranges are $0.59 a pound");
        break;    
    case 'Mangoes':
        console.log("Hello Mangos!");
        break;
    case 'Papayas':
        console.log("Hello Papayas");
        break;
    default:
        console.log("Sorry, we are out of your asked item.");

}

//creating another prompt for the user to enter a password
const password = prompt("Please Enter A New Password");

//if length of password is greater then or equal to 6
if (password.length >= 6) {

    //Nested Condition, validation for spaces. 
    if (password.indexOf(' ') === -1) {

        console.log("Valid Password")
    }else {
        console.log("Password Can't Have Spaces")
    }

} else {

    console.log("Password is Too Short")
}

//creating a function named singSong
function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

//when called on will print 'DO RE MI'
singSong()
singSong()
singSong()

//new function named greet, this function takes in one parameter 
function greet(firstName) {
// 
    console.log(`Hey There, ${firstName}`)
}

//we input what value we want in the parameter
greet('Ali')

//new function named greet1, expects 2 parameter values
function greet1(firstName,lastName) {
    console.log(`Hey There, ${firstName} ${lastName[0]}.`) //our second parameter only takes the initial (first character in the string)
}

//we call our function with the 2 paramter values
greet1('Ali','Abdi')