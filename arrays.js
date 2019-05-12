const hobbies = ['Painting','Singing'];
for(let hobby of hobbies) {
    console.log(hobby);
}
console.log(hobbies.map(function(item) {
  return 'Hobby: ' + item;
}));
console.log(hobbies.map(hobby => 'Hobby: '+ hobby));
console.log(hobbies);

/// Push method adds new element to the array
hobbies.push('Cycling');
console.log(hobbies);

/// Spread Operator copies the entire existing array into new array
const newHobbies = [...hobbies];
const newHobbies1 = hobbies;
console.log(newHobbies);
console.log(newHobbies1);

// Rest Operator
const toFormArray = (...items) => {
    return items;
}
console.log(toFormArray(1,2,3,'Shatabdi'));
