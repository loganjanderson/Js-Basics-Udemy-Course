const todos = ['Order cat food', 'Clean Kitchen', 'Buy Food', 'Go to work', 'Exercise']

todos.shift()
todos.splice(1, 1)
todos.push('Finish JS course')






for (i = 0; i < todos.length; i++) {
console.log(`${i + 1}. ${todos[i]}`)
}

