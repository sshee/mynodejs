let a = 10;
let b = 20;

function addmethod1() {
    return a + b;
}

const addmethod2 = (a, b) => {
    return a + b;
};

const addmethod3 = (a, b) => a + b;

const addmethod4 = a => a + 1;
const addmethod5 = () => 2 + 2;

console.log(addmethod1());
console.log(addmethod2(1,2));
console.log(addmethod3(3,5));
console.log(addmethod4(3));
console.log(addmethod5());

