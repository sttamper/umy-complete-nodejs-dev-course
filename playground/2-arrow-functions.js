const person = {
  name: 'Alice',
  greet: () => {
    console.log(this.name);
  }
};

// logs undefined
// because arrow functions do not have their own 'this' context
person.greet();