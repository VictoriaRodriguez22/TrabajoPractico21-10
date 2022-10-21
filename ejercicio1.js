var Animal = /** @class */ (function () {
    function Animal(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    Animal.prototype.makeSound = function () {
        this.sound = this.sound;
        console.log('El ' + this.name + ' hace ' + this.sound);
    };
    return Animal;
}());
var minino = new Animal('cat', 'meow meow');
minino.makeSound(); // -> meow meow
var firulais = new Animal('dog', 'wuff wuff');
firulais.makeSound(); // -> wuff wuff
