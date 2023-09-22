function login (username) {
    let password = "";
    let curr = username[0]
    let wrong = 0;

    for (let i = curr.length - 1 ; i >= 0; i--){
        password += curr[i] ;
    }

    let guess = username [1];
    let index = 2;

    while (guess != password) {
        wrong++

        if (wrong == 4){
            console.log(`User ${curr} blocked!`)
            return;
        }
        console.log("Incorrect password. Try again.");
        guess = username[index];
        index++;
    }

    console.log(`User ${curr} logged in.`);
     

   
}

login (['Acer','login','go','let me in','recA'])