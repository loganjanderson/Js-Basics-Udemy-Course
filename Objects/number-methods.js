let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))

console.log(Math.floor(num))

console.log(Math.ceil(num))

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)


// Challenge Area

const makeGuess = (guess) => {
    let minnum = 1
let maxnum = 5
randNum = Math.floor(Math.random() * (maxnum - minnum + 1)) + maxnum
return randNum === guess
}

makeGuess(3)