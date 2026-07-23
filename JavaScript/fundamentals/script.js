let firstName = "Mayank";
let lastName = "Chhavri";

document.getElementById("variables").textContent =
`First Name: ${firstName}
Last Name: ${lastName}`;

let num1 = 20;
let num2 = 10;

document.getElementById("arithmetic").innerHTML = `
Addition = ${num1 + num2}<br>
Subtraction = ${num1 - num2}<br>
Multiplication = ${num1 * num2}<br>
Division = ${num1 / num2}<br>
Modulus = ${num1 % num2}
`;

function getName() {
    let username = prompt("Enter your name");

    document.getElementById("username").textContent =
    `Welcome ${username}`;
}

let age = "23";
age = Number(age);

document.getElementById("conversion").innerHTML = `
Converted Value = ${age}<br>
Type = ${typeof age}
`;

const country = "India";

document.getElementById("constant").textContent =
`Country = ${country}`;

document.getElementById("math").innerHTML = `
PI = ${Math.PI}<br>
Round = ${Math.round(4.6)}<br>
Floor = ${Math.floor(4.9)}<br>
Ceil = ${Math.ceil(4.1)}<br>
Max = ${Math.max(20,40,10)}<br>
Min = ${Math.min(20,40,10)}
`;

function randomNumber() {
    let random = Math.floor(Math.random() * 100) + 1;

    document.getElementById("random").textContent =
    `Random Number = ${random}`;
}

let message = " JavaScript ";

document.getElementById("string").innerHTML = `
Length = ${message.length}<br>
Upper = ${message.toUpperCase()}<br>
Lower = ${message.toLowerCase()}<br>
Trim = ${message.trim()}
`;

let fullname = "Mayank Chhavri";

let first = fullname.slice(0, 6);
let last = fullname.slice(7);

document.getElementById("slice").innerHTML = `
First Name = ${first}<br>
Last Name = ${last}
`;

let username = "    mayank   ";

username =
username.trim().charAt(0).toUpperCase() +
username.trim().slice(1).toLowerCase();

document.getElementById("chain").textContent =
username;

let count = 0;

function increaseCount() {
    count++;
    document.getElementById("countLabel").textContent = count;
}

function decreaseCount() {
    count--;
    document.getElementById("countLabel").textContent = count;
}

function resetCount() {
    count = 0;
    document.getElementById("countLabel").textContent = count;
}

function checkAge() {
    let age = Number(prompt("Enter your age"));

    if (age >= 18) {
        alert("You are eligible to vote.");
    } else {
        alert("You are not eligible.");
    }
}

function checkAgreement() {
    const agree = document.getElementById("agree");

    if (agree.checked) {
        alert("Thank you for accepting.");
    } else {
        alert("Please accept terms.");
    }
}

function ternaryExample() {
    let age = Number(prompt("Enter age"));

    let result = (age >= 18) ? "Eligible" : "Not Eligible";

    alert(result);
}

function switchExample() {
    let day = Number(prompt("Enter day number (1-7)"));

    switch (day) {
        case 1:
            alert("Monday");
            break;
        case 2:
            alert("Tuesday");
            break;
        case 3:
            alert("Wednesday");
            break;
        case 4:
            alert("Thursday");
            break;
        case 5:
            alert("Friday");
            break;
        case 6:
            alert("Saturday");
            break;
        case 7:
            alert("Sunday");
            break;
        default:
            alert("Invalid Day");
    }
}

function logicalExample() {
    let age = Number(prompt("Enter age"));

    let citizen = prompt("Are you an Indian Citizen? (yes/no)");

    if (age >= 18 && citizen === "yes") {
        alert("Eligible to Vote");
    } else {
        alert("Not Eligible");
    }
}

function strictExample() {
    let num = 10;
    let text = "10";

    alert(num === text);
}

function whileExample() {
    let password = "";

    while (password !== "admin123") {
        password = prompt("Enter Password");
    }

    alert("Access Granted");
}

function forExample() {
    let output = "";

    for (let i = 1; i <= 10; i++) {
        output += i + "\n";
    }

    alert(output);
}

function guessGame() {
    const answer = Math.floor(Math.random() * 10) + 1;

    let guess = Number(prompt("Guess a number between 1-10"));

    while (guess !== answer) {
        guess = Number(prompt("Wrong! Guess Again"));
    }

    alert("Correct! Number was " + answer);
}

function greetUser() {
    let name = prompt("Enter your name");
    greeting(name);
}

function greeting(name) {
    alert(`Welcome ${name}!`);
}