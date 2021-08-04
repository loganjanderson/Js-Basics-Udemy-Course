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

const sortTodos = (list) => {
  list.sort((a, b) => {
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  });
};

sortTodos(todos);

console.log(todos);
