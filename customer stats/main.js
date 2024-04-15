const hour1 = parseInt(prompt('Number of customers in the first hour'))
const hour2 = parseInt(prompt('Number of customers in the second hour'))
const hour3 = parseInt(prompt('Number of customers in the third hour'))
const hour4 = parseInt(prompt('Number of customers in the fourth hour'))

const total = hour1+hour2+hour3+hour4
const avg = total/4

console.log(`Hour 1: $(hour1)`)
console.log(`Hour 2: $(hour2)`)
console.log(`Hour 3: $(hour3)`)
console.log(`Hour 4: $(hour4)`)
console.log(`Total number of customers: $(total)`)
console.log(`Avarage number of custormers per hour: $(avg)`)