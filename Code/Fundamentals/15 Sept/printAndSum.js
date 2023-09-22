function print (start, end){
    let nums = "";
    let sum = 0

    for (let i = start; i <= end; i++){
        nums += i + " ";
        sum += i
    }

    console.log (nums);
    console.log (`Sum: ${sum}`)
}

print (5,10)