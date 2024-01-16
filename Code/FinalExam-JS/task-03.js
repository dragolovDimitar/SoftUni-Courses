
function heroSpellbook(arr) {
    let heroes = {};

    let command = arr.shift();

    while (command !== 'End') {
        let [action, heroName, spellName] = command.split(' ');

        if (action === 'Enroll') {
            heroes[heroName] ? console.log(`${heroName} is already enrolled.`) : heroes[heroName] = [];
        } else if (action === 'Learn') {
            if (!heroes[heroName]) {
                console.log(`${heroName} doesn't exist.`);
            } else {
                heroes[heroName].includes(spellName) ? console.log(`${heroName} has already learnt ${spellName}.`) : heroes[heroName].push(spellName);
            }
        } else if (action === 'Unlearn') {
            if (!heroes[heroName]) {
                console.log(`${heroName} doesn't exist.`);
            } else {
                heroes[heroName].includes(spellName) ? heroes[heroName] = heroes[heroName].filter(spell => spell !== spellName) : console.log(`${heroName} doesn't know ${spellName}.`);
            }
        }

        command = arr.shift();
    }

    
    console.log('Heroes:');
    for (let [hero, spells] of Object.entries(heroes)) {
        console.log(`== ${hero}: ${spells.join(', ')}`);
    }
}


heroSpellbook(["Enroll Stefan",

"Enroll Peter",

"Enroll Stefan",

"Learn Stefan ItShouldWork",

"Learn John ItShouldNotWork",

"Unlearn George Dispel",

"Unlearn Stefan ItShouldWork",

"End"])