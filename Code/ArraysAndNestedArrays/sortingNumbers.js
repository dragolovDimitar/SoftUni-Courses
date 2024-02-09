function sortNum (arr) {
    let newArr = []
 arr.sort((a,b) => a - b);
 arr.forEach((num, i) => {
    newArr.push(num);
    if (i+1 < arr.length){
        newArr.push(arr.pop());
    }
 })
 return newArr
}
console.log(sortNum([22, -9, 63, 3, 2, 19, 54, 0, 21, 18]))