let modal = document.querySelector(".modal"),
  ModalBcg = document.querySelector(".modal-bcg");

export const modalOpen = (title = "", description = "", status = "high") => {
  modal.querySelector("input").value = title;
  modal.querySelector("textarea").value = description.replace(
    /<br\s*\/?>/gi,
    "\n"
  );
  modal.querySelector("select").value = status;
  ModalBcg.style.display = "block";
  modal.style.display = "block";
};
export const modalClose = () => {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
  ModalBcg.style.display = "none";
  modal.querySelector("form").reset();
};
