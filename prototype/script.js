const animal={
    sound(){
        return `Animal makes a sound`
    }
}

const dog=Object.create(animal);

dog.name="Tommy";

console.log(dog);
console.log(dog.sound());