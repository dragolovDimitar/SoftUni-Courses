/*function parseNum (number1,operator,number2){
    if (operator == '+'){
        console.log((number1 + number2).toFixed(2));
    } else if (operator == '-'){
        console.log((number1 - number2).toFixed(2))
    } else if (operator == '*'){
        console.log((number1 * number2).toFixed(2))
    } else {
        console.log((number1 / number2).toFixed(2))
    }
}
*/

function parseNum(num1,operator,num2){
    let result = `${num1}${operator}${num2}`

    console.log(eval(result).toFixed(2))
}

parseNum (10,'+',5)