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

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortNotes(notes);
console.log(notes);
