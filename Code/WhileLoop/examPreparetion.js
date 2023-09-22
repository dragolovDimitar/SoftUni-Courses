function examPrep(input) {
    let badNumber = Number(input[0]);
    let index = 1;
    let taskName = input[index];
    let badCount = 0;
    let allTasks = 0;
    let score = 0;
    let lastName = 0;
    
    
    while(taskName !== "Enough"){
        lastName = input[index];
        index++;
        let grade = Number(input[index]);
        score += grade;
        allTasks++;
        
        if (grade <= 4){
            badCount++
            if (badCount >= badNumber){
                console.log(`You need a break, ${badCount} poor grades.`);
                return;
            }
        }
        index++
        taskName = input[index]
        
    }
    
    let total = score / allTasks;
    console.log (`Average score: ${total.toFixed(2)}`);
    console.log(`Number of problems: ${allTasks}`);
    console.log(`Last problem: ${lastName}`)


}

examPrep (["3",

"Money",

"6",

"Story",

"4",

"Spring Time",

"5",

"Bus",

"6",

"Enough"])