/*Create a function that takes 3 arguments 
- The fist adn second argument will be a number
- The third arguemnt will be a math operator (+, -, * , /)

Ex: If the operator is a plus then you will add the two numbers together and console log the sum
*/


// Call your function 4 times with different numbers and operators to make sure it works correctly

function calculator (num1, num2, operator) {
    let answer;
    if(operator === "+"){
        answer = num1 + num2;

    }else if(operator === "-"){
        answer = num1 - num2;

    }else if(operator === "*"){
        answer = num1 * num2;

    }else if(operator === "/"){
        answer = num1 / num2;

    }
    console.log(answer);
}

calculator(5, 2, "+");
calculator(9, 4, "-");
calculator(6, 9, "*");
calculator(20, 2, "/");
