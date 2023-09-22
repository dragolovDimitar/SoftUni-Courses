function exam (input){
    let students = Number(input[0]);
    let index = 1;
    let grade = Number (input[index])
    let avgGrades = 0;
    let groupOne = 0;
    let groupTwo = 0;
    let groupThree = 0;
    let groupFour = 0;

    for (let i = 1; i <= students; i++){
        if (grade < 3){
            groupFour++;
        } else if (grade < 4){
            groupThree++;
        } else if (grade < 5){
            groupTwo++;
        } else if (grade >= 5){
            groupOne++;
        }

        avgGrades += grade;

        index++;
        grade = Number (input[index]);
    }

    console.log(`Top students: ${(groupOne / students * 100).toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${(groupTwo / students * 100).toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${(groupThree / students * 100).toFixed(2)}%`)
    console.log(`Fail: ${(groupFour / students * 100).toFixed(2)}%`)
    console.log(`Average: ${(avgGrades / students).toFixed(2)}`)
}
exam(['10','3.00','2.99','5.68','3.01','4','4','6.00','4.50','2.44','5'])