let notes = [];

const filters = {
  searchText: "",
};

const notesJSON = localStorage.getItem("notes");

if (notesJSON !== null) {
  notes = JSON.parse(notesJSON);
}

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";
  filteredNotes.forEach((note) => {
    const noteEl = document.createElement("p");
    if (note.title.length === 0) noteEl.textContent = note.title;
    document.querySelector("#notes").appendChild(noteEl);
  });
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", (e) => {
  notes.push({
    title: "",
    body: "",
  });
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes(notes, filters);
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
