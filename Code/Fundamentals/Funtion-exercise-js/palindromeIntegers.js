function palindromeNum (arrNums){

    for (let num = 0; num < arrNums.length; num++){

        let strNum = String(arrNums[num]);
        let splitStr = strNum.split('');
        let revStr = splitStr.reverse();
        let joinStr = revStr.join('');
        let nums = Number(joinStr);
        
        
        console.log(nums === arrNums[num]);
    }

    

    // for (let i = 0; i < arrNums.length; i++){
    //     let strNum = String(arrNums[i]);
    //     let reverseNum = '';

    //     equal(strNum, reverseNum);

    //    function equal (strNum, reverseNum){

    //        for (let j = strNum.length - 1 ; j >= 0; j--){
    //            reverseNum += strNum[j];
    //        }
           
    //        if (reverseNum === strNum) {
    //            console.log(true);
    //        } else {
    //            console.log(false);
    //        }
    //    } 
    // }
}

palindromeNum([32,2,232,1010])