const notes = [
  {
    title: "My next trip",
    body: "I would like to go to Portland",
  },
  {
    title: "Habits to work on",
    body: "Read more books",
  },
  {
    title: "Office modification",
    body: "Wear a hoodie",
  },
];

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

// create a nre paragraph
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new element from javascript";
document.querySelector("body").appendChild(newParagraph);
