function words (input) {
    let index = 0;
    let command = input[index];
    index++;
    

    
    

    while (command !== "Stop") {
        console.log(command);
        command = input[index];
        index++;
        
    }
}

words ([
"AfterStop",
"Europe","Stop",
"HelloWorld"])