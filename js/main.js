console.log('siema!');
const name = 'Robert';
const js = 'konsoli';
const age = 75;
console.log(`Sie ma jestem ${name} witam
w ${js} Powodzenia 👍`);
const diary = document.querySelector('.diary__paragraf--js');
console.log(diary.innerHTML);
diary.innerHTML = `<strong>Sie ma</strong> jestem ${name} witam
w ${js} Powodzenia 👍`;
const paragraph = document.querySelectorAll('p');
console.log(paragraph);
console.log(paragraph[0]);
const span = document.querySelector('.span__js');
span.innerHTML = '<i>JS</i> jest Niesamowity';
if ('javascript' != 'java') {
    console.log('to prawda');
}
if (age < 20) {
    console.log('masz mniej niż 20 lat');
} else if ((age >= 20) && (age <= 30)) {
    console.log('masz więcej niż dwadzieścia a mniej niż 30');
} else {
    console.log('jesteś 30+');
}

switch (age) {
    case 20:
        console.log('masz równo 20 lat');
        break;
    case 30:
        console.log('masz równo 30 lat');
        break;
    default:
        console.log(`masz ${age} lat`);
        break;
}
let oldIndicator;

if (age > 70) {
    oldIndicator = 'yes';
} else {
    oldIndicator = 'no';
}

const amIOld = (age > 70) ? 'yes' : 'no';
console.log(amIOld);

function calculate(x) {
    x = x + 3;
    console.log(x);
    return x * 7
}

console.log(calculate(2));
const myCalculation = calculate(4);
console.log(myCalculation);
function hellovisitor(name, age) {
    console.log(`witaj ${name} masz ${age}`);
}
hellovisitor('radek', '29');

const button = document.querySelector('.header__button--js');
console.log(button);

button.addEventListener('click', (e) => {
    const header = document.querySelector('.header__title--js');
    //header.classList.add ("header__title--red");
    if (header.classList.contains("header__title--red")); {
        console.log('jest klasa');
    } else {
        console.log('brak klasy');
    }
    header.innerHTML = 'Klik Klik';

});