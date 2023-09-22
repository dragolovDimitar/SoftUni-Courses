function convert(input){
    let radian = Number(input[0]);
    let degrees = radian * 180 / Math.PI;
    console.log(degrees);
}

convert(["3.1416"]);