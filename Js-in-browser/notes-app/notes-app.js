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

const filters = {
  searchText: "",
};

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";
  filteredNotes.forEach((note) => {
    const noteEl = document.createElement("p");
    noteEl.textContent = note.title;
    document.querySelector("#notes").appendChild(noteEl);
  });
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", (e) => {
  e.target.textContent = "button was clicked";
});

document.querySelector("#remove-all").addEventListener("click", (e) => {
  document.querySelectorAll(".note").forEach((note) => {
    note.remove();
  });
});

document.querySelector("#search").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});
