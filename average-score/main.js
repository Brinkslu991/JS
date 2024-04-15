// Input
const num1 = Number(prompt ('Input first quiz score.'));
const num2 = Number(prompt ('Input second quiz score.'));
const num3 = Number(prompt ('Input third quiz score.'));
const numScores = 3;

// Process
// Calculate the average quiz score
const totalPoints = num1 + num2 + num3;
// Calculate average quiz score
const averageScore = totalPoints / numScores;

// Output
const myOutput = `
First quiz score: ${num1}
Second quiz score: ${num2}
Third quiz score: ${num3}

Average score: ${averageScore}`;

// Display output
console.log(myOutput);