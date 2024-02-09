function sortArrBy2Criteria (arr) {
    arr.sort((a,b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.localeCompare(b, undefined, { sensitivity: 'base'});
    });
    console.log(arr.join('\n'));
}
sortArrBy2Criteria(['test', 'Deny', 'omen', 'Default'])
sortArrBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])