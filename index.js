// Your code here
// Define the Cat class
class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  // Define the Dog class
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  // Define the Bird class
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      if (this.sex === "male") {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
  
  const cat1 = new Cat("Whiskers", "female");
  console.log(cat1.speak()); // "Whiskers says meow!"
  
  const dog1 = new Dog("Rex", "male");
  console.log(dog1.speak()); // "Rex says woof!"
  
  const bird1 = new Bird("Tweety", "female");
  console.log(bird1.speak()); // "Tweety says squawk!"
  
  const bird2 = new Bird("Polly", "male");
  console.log(bird2.speak()); // "It's me! Polly, the parrot!"
  
  module.exports = { Cat, Dog, Bird };
  