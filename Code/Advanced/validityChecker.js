function validity (x1,y1,x2,y2) {
    const distance = (x1 , y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2)+Math.pow(y2-y1,2));
    
    let distance1 = distance(x1, y1, 0, 0);
    let distance2 = distance(x2, y2, 0, 0);
    let distance3 = distance(x1, y1, x2, y2);

    if (Number.isInteger(distance1)) {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
    }
    
    if (Number.isInteger(distance2)) {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
    }

    if (Number.isInteger(distance3)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
validity(2.5, 0, 0, 0)