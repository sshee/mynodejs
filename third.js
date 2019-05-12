'use strict';

let name = 'Shatabdi';
var age = 31;
let hasHobbies = true;

function summarizeUser() {
    age += 1; 
    return 'Name is ' + name + 
    ',Age is ' + age + 
    ',Has hobbies ' + hasHobbies;
}
console.log(age);
console.log(summarizeUser());