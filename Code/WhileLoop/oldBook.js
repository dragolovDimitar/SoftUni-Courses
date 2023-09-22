function oldBooks (input){
    let favBook = input[0];
    let index = 1;
    let books = input[index]
    index++;
    let bookcounter = 0;

    while(books !== "No More Books") {
        let name = books;
        if (name === favBook){
            console.log(`You checked ${bookcounter} books and found it.`);
            break;
        } 

        books = input[index];
        index++;
        bookcounter++
    }
   if (books !== favBook){
    console.log("The book you search is not here!");
    console.log(`You checked ${bookcounter} books.`)
   }
}

oldBooks(["The Spot",

"Hunger Games",

"Harry Potter",

"Torronto",

"Spotify",

"No More Books"])