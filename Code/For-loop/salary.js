function salary (input) {
    let tabs = Number (input[0]);
    let wage = Number (input[1]);

    for (let index = 2; index < input.length; index++) {
        let currentTab = input[index]

        switch(currentTab){
            case "Facebook": wage -= 150; break;
            case "Instagram": wage -= 100; break;
            case "Reddit": wage -= 50; break;
        }
    }

    if (wage <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log (wage)
    }
}

salary (["10","750","Facebook","Dev.bg","Instagram",
"Facebook","Reddit","Facebook","Facebook"])