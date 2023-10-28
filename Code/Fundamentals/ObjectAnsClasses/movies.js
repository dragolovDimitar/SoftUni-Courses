function moviesList (list) {
    let movies = [];
    
    for (let command of list){
        
        if (command.includes('addMovie')){
            let tokens = command.split('addMovie ')[1];
            let name = { name: tokens};
            movies.push(name);
        } else if (command.includes('directedBy')){
            let [name, director] = command.split(' directedBy ');
            let movie = movies.find(movie => movie.name == name);
            if (movie) {
                movie.director = director;
            }
        } else if (command.includes('onDate')){
            let [name, date] = command.split(' onDate ');
            let movie = movies.find(movie => movie.name == name);
            if (movie) {
                movie.date = date;
            }
        }
    }
    for (let mov of movies){
        if (mov.name && mov.director && mov.date){
            console.log(JSON.stringify(mov));
        }
    }
    
}
moviesList([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])