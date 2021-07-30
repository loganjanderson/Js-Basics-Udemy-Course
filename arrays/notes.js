const notes = ['Note 1', 'Note 2', 'Note 3']

// notes.push('My new note')


// console.log(notes.pop())

// console.log(notes.shift())
// notes.unshift('My first note')

//notes.splice(1, 1, 'New second Item')


notes[2] = 'this is the new note 3'

notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
})

console.log(notes)

for (let i = 0; i <= 2; i++) {
    console.log(i)
}

for (let i = 0; i < notes.length; i++) {
    console.log(notes[i])
}