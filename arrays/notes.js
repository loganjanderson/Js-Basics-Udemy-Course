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

const findNotes = (notes, query) => {
  return notes.filter(function (note, index) {
    const IsTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return IsTitleMatch || isBodyMatch;
  });
};

console.log(findNotes(notes, "work"));
