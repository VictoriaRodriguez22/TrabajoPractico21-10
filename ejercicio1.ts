
class Animal {
    protected name: string;
    protected sound: string;

    public constructor (name: string, sound: string) {
        this.name = name;
        this.sound = sound
      }
         
    public makeSound (): void {
      this.sound = this.sound
        console.log ( 'El ' + this.name + ' hace ' + this.sound);
      }
}

let minino: Animal = new Animal('cat', 'meow meow');
   minino.makeSound(); // -> meow meow
let firulais: Animal = new Animal ('dog', 'wuff wuff');
   firulais.makeSound(); // -> wuff wuff