const todos = [
  {
    title: "Order cat food",
    completed: false,
  },
  {
    title: "Clean Kitchen",
    completed: true,
  },
  {
    title: "Buy Food",
    completed: true,
  },
  {
    title: "Go to work",
    completed: false,
  },
  { title: "Exercise", completed: false },
];

const filterTodos = (todos, value) => {
  return todos.filter((todo) => {
    return todo.completed === value;
  });
};

console.log(filterTodos(todos, true));
