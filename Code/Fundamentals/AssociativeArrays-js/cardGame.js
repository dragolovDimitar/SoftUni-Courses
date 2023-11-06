function cardGame (arr) {
    let playersDecks = {};
    let cardPoints = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 , 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14 };
    let typeValue = { S: 4, H: 3, D: 2, C: 1};    

    for (let playerCards of arr){
        let [player, cards] = playerCards.split(': ');
        let card = cards.split(', ');

        if (player in playersDecks){
            playersDecks[player].push(...card);
        } else {
            playersDecks[player] = card;
        }
        
    }

    let entries = Object.entries(playersDecks);

    for (let [player, deck] of entries){
        let unique = new Set(deck);
        let deckValue = 0;
        for(let card of unique){
            let power = card.slice(0, card.length - 1);
            let type = card[card.length - 1];

            let cardValue = cardPoints[power] * typeValue[type];
            deckValue += cardValue;
        }
        console.log(`${player}: ${deckValue}`);
    }

}
cardGame([

    'Peter: 2C, 4H, 9H, AS, QS',
    
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    
    'Andrea: QH, QC, QS, QD',
    
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    
    'Andrea: QH, QC, JS, JD, JC',
    
    'Peter: JD, JD, JD, JD, JD, JD'
    
    ])