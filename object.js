const person = {
  name: 'Shatabdi',
  age: 31,
  greet1: () => {
      console.log('Hi, I am ' + this.name);
  }
};

person.greet1();

const person2 = {
    name: 'Shatabdi',
    age: 31,
    greet2() {
        console.log('Hi, I am ' + this.name);
    }
  };

person2.greet2();

const person3 = {
    name: 'Shatabdi',
    age: 31,
    greet3: function() {
        console.log('Hi, I am ' + this.name);
    }
  };

person3.greet3();

const person4 = {...person3};
console.log(person4);



