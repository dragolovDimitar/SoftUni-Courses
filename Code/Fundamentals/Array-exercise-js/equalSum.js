function equals (arr) {
    let totalSum = 0;
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++){
        totalSum += arr[i];
    }

    for (let i = 0; i < arr.length; i++){
        totalSum -= arr[i];

        if (leftSum == totalSum){
            return console.log(i);;
        }

        leftSum += arr[i]
    }

    return console.log("no");;

}

equals ([1,2])