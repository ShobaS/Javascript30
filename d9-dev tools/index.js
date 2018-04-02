const dogs = [{ name: 'Snickers', age: 2}, { name: 'hugo', age: 8}];
const p = document.querySelector('p');
function makeGreen() {
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

//Regular 
console.log('hello');

//Interpolated
console.log('hello %s !!','Shoba');

//Styled
console.log('%c welcome to javascript', 'font-size:30px');

//warning
console.warn("Alert");

//error
console.error("Error msg");

//info
console.info("Useful info");  

//testing
console.assert( 1 === 2, 'that is wrong');

//clear
console.clear();

//viewing DOM Elements
console.log(p);
console.dir(p);
console.clear();

//grouping together
dogs.forEach( dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

//counting
console.count('x');
console.count('x');
console.count('y');
console.count('x');
console.count('y');

//timing
console.time('fetching data');
fetch('https://api.github.com/users/ShobaS')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

//table
console.table(dogs);