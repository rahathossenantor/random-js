{
    // swapping variables values.
    let a = 5;
    let b = 10;
    console.log("Before swapping: ", "a = ", a, "b = ", b);
    let temp = a;
    a = b;
    b = temp;
    console.log("After swapping: ", "a = ", a, "b = ", b);
}


{
    // Finding bigest number (1/3)
    let firstNum = parseFloat(prompt("Enter first number:"));
    let secondNum = parseFloat(prompt("Enter second number:"));
    let thirdNum = parseFloat(prompt("Enter third number:"));

    if (firstNum > secondNum && firstNum > thirdNum) {
        console.log("The greatest number is: ", firstNum);
    } else if (secondNum > firstNum && secondNum > thirdNum) {
        console.log("The greatest number is: ", secondNum);
    } else {
        console.log("The greatest number is: ", thirdNum);
    }
}


{
    // Checking latter is a vowel or not
    let latter = prompt("Enter a latter:");
    latter = latter.toUpperCase();

    // Using if eles block
    if (latter == "A" || latter == "E" || latter == "I" || latter == "O" || latter == "U") {
        console.log(latter, " is a vowel");
    } else if (latter == "W" || latter == "Y") {
        console.log(latter, " is a semi vowel");
    } else {
        console.log(latter, " is a consonant");
    };

    // Using if switch case
    switch (latter) {
        case "A":
            console.log(latter, " is a vowel");
            break;
        case "E":
            console.log(latter, " is a vowel");
            break;
        case "I":
            console.log(latter, " is a vowel");
            break;
        case "O":
            console.log(latter, " is a vowel");
            break;
        case "U":
            console.log(latter, " is a vowel");
            break;
        default:
            console.log(latter, " is a consonant");
    }
}


{
    let s = parseFloat(prompt("Enter first number:"));
    let e = parseFloat(prompt("Enter last number:"));
    let sum = 0;
    for (let a = s; a <= e; a += 2) {
        console.log(a);
    }
}


{
    let randomNumber = Math.round(Math.random() * 6);
    randomNumber = Math.round(randomNumber);
    console.log(randomNumber);
}


{
    let x = 1;
    let sum = 0;
    while (x <= 50) {
        if (x % 3 == 0 && x % 5 == 0) {
            console.log(x);
            sum += x;
        }
        console.log(sum);
        x += 1;
    }
}


{
    let f = Number(prompt("Enter first number:"))
    let s = Number(prompt("Enter second number:"))
    let t = Number(prompt("Enter third number:"))

    f > s && f > t ? console.log(f) : s > f && s > t ? console.log(s) : console.log(t);
}


{
    // IIFE
    (function add(n1, n2) {
        let result = n1 + n2
        console.log(result)
    })(5, 5)
}


{
    let number = [80, 34, 12, 45, 76, 34];
    console.log(number);
    console.log(number.length);
    number.sort()
    console.log(number);

    let character = ["Pakistan", "India", "Afghanistan", "Bangladesh"];
    console.log(character);
    character.sort();
    console.log(character);
    character.reverse();
    console.log(character);
    console.log(typeof (character));
}


{
    function highestScore(score) {
        let max = score[0];
        for (let x = 1; x < score.length; x++) {
            if (max < score[x]) {
                max = score[x];
            };
        };
        return max;
    };
    let num = [32, 12, 65, 58, 78, 36, 152, 512];
    let result = highestScore(num);
    console.log(result);
}


{
    // creating a 2D array
    let saark = [
        ["Bangladesh", "Dhaka"], ["India", "New Delhi"], ["Pakistan", "Islamabad"], ["Afghanistan", "Kabul"]
    ]
}


{
    let str = "Hello Bangladesh!";
    console.log(str.trim());
    console.log(str);
}

{
    // Nornal function
    function displayUserName(users) {
        return users.filter(function (data) {
            return data.age > 18
        }).map(function (user) {
            return user.name
        })
    }
}

{
    // Normal arrow function
    const displayUserName = (users) => {
        return users.filter((data) => {
            return data.age > 18
        }).map((user) => {
            return user.name
        })
    }
}

// Spesial arrow function
const displayUserName = users => users.filter(data => data.age > 18).map(user => user.name)