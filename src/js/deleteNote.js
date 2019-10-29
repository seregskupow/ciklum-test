import {
  notesWrapper,
  searchField,
  completeSelect,
  prioritySelect
} from "./app.js";
import { allNotes, loadNotes } from "./loadNotes.js";

export const deleteNote = el => {
  let shouldDelete = allNotes.find(
      item => item.id.toString() === el.getAttribute("data-id")
    ),
    i = allNotes.indexOf(shouldDelete);
  allNotes.splice(i, 1);
  localStorage.setItem("notes", JSON.stringify(allNotes));
  loadNotes(searchField.value, prioritySelect.value, completeSelect.value);
};

export const deleteAll = () => {
  localStorage.clear();
  loadNotes();
};
