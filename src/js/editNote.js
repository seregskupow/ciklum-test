import { findAncestor } from "./findAncestor.js";
import { saveToStorage } from "./saveNote.js";
import { allNotes } from "./loadNotes.js";

export const editNote = (el, title, description, status, complete) => {
  let note = findAncestor(el, "note"),
    className = note.querySelector(".status").innerHTML,
    i = allNotes.indexOf(
      allNotes.find(item => item.id == note.getAttribute("data-id"))
    );

  note.querySelector(".title").innerHTML = title;
  note.querySelector(".description").innerHTML = description.replace(/\r\n/g, "<br />")
  .replace(/[\r\n]/g, "<br />");
  note.querySelector(".status").classList.remove(className);
  note.querySelector(".status").classList.add(status);
  note.querySelector(".status").innerHTML = status;

  allNotes[i].title = title;
  allNotes[i].description = description;
  allNotes[i].status = status;
  allNotes[i].complete = complete;
  saveToStorage(allNotes);
};
