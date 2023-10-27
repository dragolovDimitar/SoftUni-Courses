function catsClasses(catss){
    class Cat {
        name;
        age;

        constructor(name, age){
        this.name = name;
        this.age = age; 
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let catAs of catss){
        let tokens = catAs.split(' ');
        let name = tokens[0];
        let age = Number(tokens[1]);
        let cat = new Cat(name, age);
        cat.meow();

    }
}

catsClasses(['Candy 1', 'Poppy 3', 'Nyx 2'])