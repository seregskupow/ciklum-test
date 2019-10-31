#TODO APP

A simple TODO app made with pure JavaScript(ES6)

* Empty state
![empty-state](readme_img/empty_state.png)

* Create/Edit state
![create-edit](/readme_img/create.png)

* Common state
![common-state]()

* Filtered state
![filtered state](./readme_img/create.png)
---

#USAGE

###To manage the notes you should use these controlls:###

* **create** button:
![create-btn]()
-calls modal window 
![modal]()
where user has to write the title,description and set the priority status of the note. 
After this, user can save the note by clicking **save** button
![save-btn]()
or cancel creating note by clicking **cancel** button
![cancel-btn]()
---
* **clear all** button:
![clear-all-btn]()
deletes all notes and clears the `LocalStorage`.
---

###Find/filter notes

*use **search field** to find the note by the **title**
![search-field]()

*use **filter selects** to search notes by **priority status** or **complete status**
![select-filters]()
---

###Note controls:###

You can access note controlls by hovering **menu** element
![menu-element]()

After this, you would see three parameters appeared:

* **delete** - deletes the note.
* **edit*** - calls the modal window where you can edit and save the note.
* **done** - gives the note **done** status:
![done-note]()

The **done** note has two buttons:
* **return** - changes note status back to active
![return]()
* **delete** - deletes the note
![cross-del-btn]()
---

#BUILT WITH
* pure **JavaScript(ES6)** matching airbnb style guides
* CSS preprocesson **SCSS**
* **Webpack** module bundler


