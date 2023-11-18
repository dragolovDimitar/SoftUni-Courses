function reverse (text) {
    let middleIndx = text.length / 2;

    let firstHaft = text.slice(0, middleIndx);
    let secondHalf = text.slice(middleIndx);

    firstHaft = firstHaft.split('').reverse().join('');
    secondHalf = secondHalf.split('').reverse().join('');
    console.log(firstHaft);
    console.log(secondHalf);
}

reverse('tluciffiDsIsihTgnizamAoSsIsihT')