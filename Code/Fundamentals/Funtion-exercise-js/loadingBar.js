function loadingBar (num) {
    let procentages = '%'.repeat(num / 10);
    let dots = '.'.repeat(10 - num / 10);

    if (num === 100){
        console.log(`${num}% Complete!`);
        console.log(`[${procentages}]`);
    } else {
        console.log(`${num}% [${procentages}${dots}]`);
        console.log(`Still loading...`);
    }
}

loadingBar(0)