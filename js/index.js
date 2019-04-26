alert('Hello!');

let userName = 'John';

alert(userName);

let userAge = parseFloat(prompt('Enter your age'));

const message = 'Your age is' + userAge;

alert(message);

const newAge = userAge + 1;

alert(newAge);

if (userAge <18) {
    alert('You are kid');
    
} else if (userAge >80 && userAge <100){
    alert('You are between 80 and 100');
} else if (userAge >100){
    alert('You have seen a lot in your life');
} else {
    alert('You are adult')
}