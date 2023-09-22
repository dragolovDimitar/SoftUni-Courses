function graduation (input) {
    let index = 0;
    let name = input[index];
    index++
    let i = 1;
    let failed = 0;
    let total = 0;

    let hasExcluded = false;
    while(i <= 12){
        let grade = Number(input[index]);
        index++;
        if (grade < 4){
            failed++;
            if (failed === 2){
                console.log(`${name} has been excluded at ${i} grade`);
                hasExcluded = true;
                break;
            }
            continue;
        }
       
        total += grade;
        i++;
        
    }
    if(!hasExcluded){
        let averageGrade = total / 12
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
    }

}

graduation(["Gosho",

"5",

"5.5",

"6","5.43", "5.5", "2", "3", "5", "6", "6", "5.43", "5"])