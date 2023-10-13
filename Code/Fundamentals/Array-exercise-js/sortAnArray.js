function sortAn (state) {
    let arrOfState = state.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(arrOfState.join('\n'));
}

sortAn(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])