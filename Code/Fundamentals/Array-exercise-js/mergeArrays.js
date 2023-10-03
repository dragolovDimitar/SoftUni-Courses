function mergeArrays (arr1, arr2){
    let newArray = [];
    
    for (let i = 0; i < arr1.length; i++){
        let num1 = arr1[i];
        let num2 = arr2[i];
        let sum 

        if (i % 2 == 0){
            sum = Number(num1) + Number(num2);
            newArray.push(sum)
        } else {
            sum = (num1) + (num2);
            newArray.push(sum)
        }
    }
    console.log(newArray.join(" - "));
}

mergeArrays(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])