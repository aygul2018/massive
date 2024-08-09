
let numbers = [];

for (let i = 0; i < 5; i++) {
    let number = parseInt(prompt((i+1) + "-ci ədədi daxil edin:"));
    numbers.push(number);
}

let minNumber = Math.min(...numbers);

console.log("Ən kiçik ədəd: " + minNumber);

