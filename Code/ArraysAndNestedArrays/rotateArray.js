function rotate(arr, rotations) {
    for (let i = 0; i < rotations; i++){
        let currValue = arr.pop();
        arr.unshift(currValue)
    }

    console.log(arr.join(' '));
}
rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 15)