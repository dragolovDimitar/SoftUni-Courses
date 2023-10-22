function phonaShop (shop){
    let myStorage = shop.shift().split(', ');

    for (let commands of shop){
        let separate = commands.split(' - ');
        let action = separate.shift();
        let phone = separate.shift();

        if (action == 'Add'){
            if (!myStorage.includes(phone)){
                myStorage.push(phone);
            }
        } else if (action == 'Remove'){
            if (myStorage.includes(phone)){
                let index = myStorage.indexOf(phone);
                myStorage.splice(index, 1);
            }
        } else if (action == 'Bonus phone'){
            let bonus = phone.split(':');
            if (myStorage.includes(bonus[0])){
                let index = myStorage.indexOf(bonus[0]);
                 myStorage.splice(index + 1, 0, bonus[1])
            }
          
        } else if (action == 'Last'){
            if (myStorage.includes(phone)){
                let index = myStorage.indexOf(phone);
                let last = myStorage.splice(index, 1);
                myStorage.push(last[0]);
            }
        } else if (action == 'End'){
            console.log(myStorage.join(', '));
            return;
        }
    }
}

// phonaShop (["SamsungA50, MotorolaG5, IphoneSE",

// "Add - Iphone10",

// "Remove - IphoneSE",

// "End"]);
phonaShop(["HuaweiP20, XiaomiNote",

"Remove - Samsung",

"Bonus phone - XiaomiNote:Iphone5",

"End"]);

// phonaShop(["SamsungA50, MotorolaG5, HuaweiP10",

// "Last - SamsungA50",

// "Add - MotorolaG5",

// "End"])