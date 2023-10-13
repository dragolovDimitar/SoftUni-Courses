function bombOfNum (numbers, bomb){
    let bombNum = Number(bomb[0]);
    let power = Number(bomb[1]);
    
    while (numbers.includes(bombNum)){
        let idx = numbers.indexOf(bombNum);
        numbers.splice(Math.max(0,idx - power), power * 2 + 1);

    }

    let sum = 0;

    for (let nums of numbers){
        sum += nums;
    }

    console.log(sum);
}
bombOfNum([1, 2, 2, 4, 2, 2,2, 9],[4, 2])