function printElement (arr, step) {
    let numbers = [];
    for (let i = 0; i < arr.length; i += step){
        numbers.push(arr[i]);
    }

    return numbers
}
console.log(printElement(['5','20','31','4','20'],2));