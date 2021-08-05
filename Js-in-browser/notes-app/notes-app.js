//Query and remove
// const p = document.querySelector("p");
// p.remove();

// query all and remove

const ps = document.querySelectorAll("p");

ps.forEach((p) => {
  p.textContent = "********";
  //   console.log(p.textContent);
  //   p.remove();
});
