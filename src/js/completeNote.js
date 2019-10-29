import { allNotes } from "./loadNotes.js";
import { saveToStorage } from "./saveNote.js";

//Sets a note in the 'complete' state
export const completeNote = (el, complete) => {
  el.querySelectorAll("button").forEach(item => {
    item.style.display = "block";
  });
  el.querySelector(".note-wrap").style.opacity = "0.3";
  el.querySelector(".menu").style.display = "none";

  allNotes.find(item => item.id == el.getAttribute("data-id")).complete = true;
  saveToStorage(allNotes);
};

//Cansels the 'complete' state of a note
export const returnNote = el => {
  el.querySelectorAll("button").forEach(item => {
    item.style.display = "none";
  });
  el.querySelector(".note-wrap").style.opacity = "1";
  el.querySelector(".menu").style.display = "block";

  allNotes.find(item => item.id == el.getAttribute("data-id")).complete = false;
  saveToStorage(allNotes);
};
