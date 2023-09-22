function password (input) {
    let index = 0;

    let user = input[index];
    index++;

    let password = input[index];
    index++;

    let data = input[index];

    while (data !== password){
        data = input[index];
        index++;
        
    }
    console.log(`Welcome ${user}!`);
}

password(["Nakov",
"676767676767",
"Pass",
"1324",
"676767676767"])