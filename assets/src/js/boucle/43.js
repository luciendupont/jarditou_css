const number = parseInt(prompt('entré un nombre  '));

for(let i = 1; i <= 10; i++) {

    const result = i * number;

    console.log(`${number} * ${i} = ${result}`);
}