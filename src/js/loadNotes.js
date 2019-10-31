import { notesWrapper } from "./app.js";

export var allNotes = [];

export const loadNotes = (title = "", status = "all", complete = "all") => {
  allNotes = JSON.parse(localStorage.getItem("notes"));
  if (allNotes) {
    displayNotes(filterNotes(allNotes, title, status, complete));
  } else {
    allNotes = [];
    displayNotes([]);
  }
};
const filterNotes = (notes, title, status, complete) => {
  if (status !== "all") {
    notes = notes.filter(item => item.status === status);
  }
  switch (complete) {
    case "all":
      break;
    case "done":
      notes = notes.filter(item => item.complete === true);
      break;
    case "open":
      notes = notes.filter(item => item.complete === false);
      break;
    default:
      break;
  }
  if (title.length) {
    notes = notes.filter(item => {
      let tempSearch = title.toLowerCase(),
        tempTitle = item.title.toLowerCase();
      if (tempTitle.includes(tempSearch)) {
        return item;
      }
    });
  }
  return notes;
};
const displayNotes = notes => {
  if (!notes.length) {
    notesWrapper.innerHTML = `<div class="notfound-wrap">
    <div class="notfound-container animated wobble">
      <div class=""><img src="app/img/travolta.png" alt=""></div>
      <div class=""><h3>Nothing here...</h3></div>
    </div>
  </div>`;
  } else {
    notesWrapper.innerHTML = "";

    notes.map(
      note =>
        (notesWrapper.innerHTML += `<div class="note animated" data-id=${
          note.id
        }>
          <button style="display:${
            note.complete === true ? "block" : "none"
          }" id="delete-all"><i class="fas fa-times"></i></button>
          <button style="display:${
            note.complete === true ? "block" : "none"
          }" class="return" id="return-note"><i class="fas fa-undo"></i></button>
          <div class="note-wrap" style="opacity:${
            note.complete === true ? "0.3" : "1"
          }">
            <h1 class="title">${note.title}</h1>
            <p class="description" style="overflow-wrap: break-word">${note.description
              .replace(/\r\n/g, "<br />")
              .replace(/[\r\n]/g, "<br />")}</p>
            <div class="note-controlls">
              <div class="status ${note.status}">${note.status}</div>
              <div class="menu" style="display:${
                note.complete === false ? "block" : "none"
              }"><span>...</span>
                <ul>
                    <li class="note-done">done</li>
                    <li class="note-edit">edit</li>
                    <li class="note-delete">delete</li>
                  </ul>
                </div>
            </div>
          </div>
        </div>`)
    );
  }
};
