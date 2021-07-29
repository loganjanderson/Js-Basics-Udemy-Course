let name = "  Logan Anderson      "

//length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes
let password = 'abc123password456'
console.log(password.includes('password'))

// Trim
console.log(name.trim())



//Challenge Area

const isValidPassword = (possiblePassword) => {
    return possiblePassword.length > 8 && !possiblePassword.includes('password') ? true : false
}

isValidPassword('12345678password')

