import { modalOpen, modalClose } from "./ModalHandle.js";
import { saveNote } from "./saveNote.js";
import { loadNotes } from "./loadNotes.js";
import { deleteNote, deleteAll } from "./deleteNote.js";
import { findAncestor } from "./findAncestor.js";
import { findIndex } from "./findIndex.js";
import { editNote } from "./editNote.js";
import { completeNote, returnNote } from "./completeNote.js";
import '../scss/main.scss';

const modalBcg = document.querySelector(".modal-bcg"),
  createNote = document.getElementById("create-note"),
  closeModal = document.getElementById("close-modal"),
  deleteAllBtn = document.getElementById("delete-all"),
  notesWrap = document.querySelector(".notes-wrap"),
  constrollsWrap = document.querySelector(".controlls-wrap");
export const searchField = constrollsWrap.querySelector("input"),
  completeSelect = constrollsWrap.querySelector("select"),
  prioritySelect = constrollsWrap.querySelectorAll("select")[1],
  saveBtn = document.getElementById("save"),
  notesWrapper = document.querySelector(".notes");
let editTrigger = false,
  editTarget;

//Function loads notes from the Local storage if they are there
loadNotes();

//Filter notes
searchField.addEventListener("keydown", e => {
  notesWrapper.innerHTML = "";
  loadNotes(e.target.value,prioritySelect.value,completeSelect.value);

});
searchField.addEventListener("keyup", e => {
  notesWrapper.innerHTML = "";
  loadNotes(e.target.value,prioritySelect.value,completeSelect.value);

});
prioritySelect.addEventListener("change", e => {
  notesWrapper.innerHTML = "";
  console.log(completeSelect.value);
  loadNotes(searchField.value, e.target.value,completeSelect.value);
});
completeSelect.addEventListener("change", e => {
  notesWrapper.innerHTML = "";
  loadNotes(searchField.value, prioritySelect.value, e.target.value);
});

//Close modal if backgrouns is being clicked
modalBcg.addEventListener("click", () => {
  modalClose();
});

//Calls saveNote function
saveBtn.addEventListener("click", e => {
  e.preventDefault();
  let title = findAncestor(e.target, "modal").querySelector("input").value,
    description = findAncestor(e.target, "modal").querySelector("textarea")
      .value,
    status = findAncestor(e.target, "modal").querySelector("select").value;
  if (!(title === "")) {
    if (editTrigger === true) {
      editNote(editTarget, title, description, status, false);
      editTrigger = false;
    } else saveNote(title, description, status, false);
  } else {
    alert("Input the title");
    return;
  }

  e.target.parentNode.parentNode.reset();
  modalClose();
});
createNote.addEventListener("click", () => {
  modalOpen();
});
closeModal.addEventListener("click", e => {
  e.preventDefault();
  e.target.parentNode.parentNode.reset();
  modalClose();
});

//Deletes all notes and clears the local storage
deleteAllBtn.addEventListener("click", () => {
  if (confirm("Are you sure to delete all notes?")) deleteAll();
});

//Event listeners for the controll btns of the notes (done,edit,delete)
notesWrap.addEventListener("click", e => {
  let target = e.target,
    parent = findAncestor(target, "note");

  if (target.className === "note-done") completeNote(parent, true);
  else if (target.className === "note-edit") {
    modalOpen(
      parent.querySelector("h1").innerHTML,
      parent.querySelector("p").innerHTML,
      parent.querySelector(".status").innerHTML
    );
    editTrigger = true;
    editTarget = target;
  } else if (target.className === "note-delete" || target.id === "delete-all") {
    if (confirm("Are you sure to delete note?")) deleteNote(parent);
  } else if (target.className === "return") {
    returnNote(parent);
  }
});
