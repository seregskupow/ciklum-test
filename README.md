# TODO APP

A simple TODO app made with pure JavaScript(ES6)

* Empty state
![empty-state](readme_img/empty_state.png)

* Create/Edit state
![create-edit](readme_img/create.png)

* Common state
![common-state](readme_img/common.png)

* Filtered state
![filtered state](readme_img/filter-state.png)
---

# USAGE

### To manage the notes you should use these controlls:

* **create** button:
![create-btn](readme_img/create-btn.png)
-calls modal window 
![modal](readme_img/modal.png)
where user has to write the title,description and set the priority status of the note. 
After this, user can save the note by clicking **save** button
![save-btn](reamme_img/save.png)
or cancel creating note by clicking **cancel** button
![cancel-btn](readme_img/cancel.png)
---
* **clear all** button:
![clear-all-btn](readme_img/clear-all.png)
deletes all notes and clears the `LocalStorage`.
---

### Find/filter notes

* use **search field** to find the note by the **title**
![search-field](readme_img/search.png)

* use **filter selects** to search notes by **priority status** or **complete status**
![select-filters](readme_img/filters.png)
---

### Note controls:

You can access note controlls by hovering **menu** element
![menu-element](readme_img/note-controlls.png)

After this, you would see three parameters appeared:

* **delete** - deletes the note.
* **edit*** - calls the modal window where you can edit and save the note.
* **done** - gives the note **done** status:
![done-note](readme_img/done-state.png)

The **done** note has two buttons:
![cross-del-btn](readme_img/done-controlls.png)

* **return** - changes note status back to active
* **delete** - deletes the note

# BUILT WITH
* pure **JavaScript(ES6)** matching airbnb style guides
* CSS preprocesson **SCSS**
* **Webpack** module bundler


