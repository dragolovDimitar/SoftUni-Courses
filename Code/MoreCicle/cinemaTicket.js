function cinema (input) {
    let index = 0;
    let command = input[index];
    let studentTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;
    let totalTickets = 0;

    while(command !== "Finish"){
        let name = command;
        index++;
        let freeSpace = Number (input[index]);
        index++;
        let ticketType = input[index];
        let ticketCounter = 0;

        while(ticketType !== "End"){
            ticketCounter++;
            switch (ticketType){
                case "standard":standardTicket++;break;
                case "kid":kidTicket++;break;
                case "student":studentTicket++;break;
            }
            if (ticketCounter >= freeSpace){
                break;
            }
            index++
            ticketType = input[index];
        }

        totalTickets += ticketCounter;
        let resultOneFilm = ticketCounter / freeSpace * 100;
        console.log(`${name} - ${resultOneFilm.toFixed(2)}% full.`);
        command = input[++index];
    }
    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${(studentTicket / totalTickets * 100).toFixed(2)}% student tickets.`)
    console.log(`${(standardTicket / totalTickets * 100).toFixed(2)}% standard tickets.`)
    console.log(`${(kidTicket / totalTickets * 100).toFixed(2)}% kids tickets.`)
}
cinema(["The Matrix",

"20",

"student",

"standard",

"kid",

"kid",

"student",

"student",

"standard",

"student",

"End",

"The Green Mile",

"17",

"student",

"standard",

"standard",

"student",

"standard",

"student",

"End",

"Amadeus",

"3",

"standard",

"standard",

"standard",

"Finish"])