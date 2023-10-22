function inventory (input){
    let invty = input.shift().split(' ');
    
    for (let command of input) {
        let current = command.split(' ');
        let action = current[0]
        let armor = current[1];

        if (action == 'Buy'){
            if (!invty.includes(armor)){
                invty.push(armor)
            }
            
        } else if (action == 'Trash'){
            if (invty.includes(armor)){
                let i = invty.indexOf(armor);
                invty.splice(i, 1);
            }
            
        } else if (action == 'Repair'){
            if (invty.includes(armor)){
                let i = invty.indexOf(armor);
                invty.splice(i, 1);
                invty.push(armor);
            }
            
        } else if (action == 'Upgrade'){
            let upElm = armor.split('-');
            if (invty.includes(upElm[0])){
                let i = invty.indexOf(upElm[0]);
                invty.splice(i + 1, 0, `${upElm[0]}:${upElm[1]}`);
            }
            
        }
    }
    console.log(invty.join(' '));
}

inventory(['SWORD Shield Spear',

'Trash Bow',

'Repair Shield',

'Upgrade Helmet-V'])