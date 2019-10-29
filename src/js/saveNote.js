import {
  notesWrapper,
  searchField,
  completeSelect,
  prioritySelect
} from "./app.js";
import { loadNotes } from "./loadNotes.js";

export const saveNote = (title, description, status, complete) => {
  let allNotes = JSON.parse(localStorage.getItem("notes")),
    id = Math.floor(Math.random() * 90000) + 10000,
    notesItem = { title, description, status, complete, id };
  if (!allNotes) allNotes = [];
  allNotes.push(notesItem);
  saveToStorage(allNotes);
  notesWrapper.innerHTML = "";
  loadNotes(searchField.value, prioritySelect.value, completeSelect.value);
};

export const saveToStorage = notes => {
  localStorage.setItem("notes", JSON.stringify(notes));
};
