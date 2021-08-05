const p = document.querySelectorAll("p");

p.forEach((todo) => {
  todo.textContent.includes("the") && todo.remove();
});
