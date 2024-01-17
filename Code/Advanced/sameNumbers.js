function sameNumbers (int) {
    let itsSame = true;
    let sum = 0;
    let intAsString = int.toString();
    sum += Number(intAsString[0]);
    for (let i = 1; i < intAsString.length; i++){
        if (intAsString[i] !== intAsString[i-1]){
            itsSame = false;
        }
        let num = Number(intAsString[i])
        sum += num
    }

    console.log(itsSame);
    console.log(sum);
}

sameNumbers(55555)