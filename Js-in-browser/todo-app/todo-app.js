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

todos.forEach((todo) => {
  let newTodo = document.createElement("p");
  newTodo.textContent = todo.title;
  document.querySelector("body").appendChild(newTodo);
});

document.querySelector("#add-new-todo").addEventListener("click", (e) => {
  console.log(e);
});

document.querySelector("#search").addEventListener("input", (e) => {
  console.log(e.target.value);
});
