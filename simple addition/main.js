// Input
const Name = prompt('Input first name.');
const num1 = Number(prompt ('Input first quiz score.'));
const num2 = Number(prompt ('Input second quiz score.'));
const numScores = 2;

const totalPoints = num1 + num2;

const averageScore = totalPoints / numScores;

const myOutput = `
Name: ${Name}
First quiz score: ${num1}
Second quiz score: ${num2}

Average score: ${averageScore}`;

console.log(myOutput);