const newNoteBtn = document.getElementById("newNoteBtn");
const modal = document.getElementById("modal");
const modalUpdate = document.getElementById("modalUpdate");
const noteVisibilityWithModal = document.getElementById("notes-card-container");
const noteForm = document.getElementById("noteForm");
const noteUpdateForm = document.getElementById("noteUpdateForm");
const deleteNote = document.getElementById("notes-card-container");
const updateNote = document.querySelectorAll(".fa-pen");
const dayToUpdate = document.querySelector(".day-to-update");
const dateToUpdate = document.querySelector(".date-to-update");
const textareaToUpdate = document.querySelector(".textarea-to-update");

//note  modal display logic
const showNoteModalForm = () => {
  noteVisibilityWithModal.style.display = "none";
  modal.style.display = "block";
};
newNoteBtn.addEventListener("click", showNoteModalForm);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    document.location.reload("/mynotes");
  }
});

//Add new note fetch request
const addNewNoteHandler = async (event) => {
  event.preventDefault();

  const day = document.getElementById("day").value;
  const date = document.getElementById("date").value;
  const content = document.getElementById("content").value;

  if (day && date && content) {
    const response = await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify({ day, date, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      noteForm.reset();
      modal.style.display = "none";
      noteVisibilityWithModal.style.display = "flex";
      document.location.replace("/mynotes");
    } else {
      alert("Failed to create note");
    }
  }
};

//Delete note fetch request
const deleteNoteHandler = async (event) => {
  if (event.target.hasAttribute("note-id")) {
    const id = event.target.getAttribute("note-id");

    const response = await fetch(`/api/notes/${id}`, {
      method: "DELETE",
    });

    response.ok
      ? document.location.replace("/mynotes")
      : alert("Failed to delete note");
  }
};

//Get note fetch request
const getNoteDataById = async (id) => {
  try {
    const response = await fetch(`/api/notes/${id}`);
    if (!response.ok) {
      console.error("Failed to fetch note data.");
      return null;
    }

    const noteData = await response.json();
    const { day, date, content } = noteData;

    return { day, date, content };
  } catch (error) {
    console.error("An error occurred during the fetch request:", error);
    return null;
  }
};

//update note in modal logic
const showNoteModalFormToUpdate = () => {
  noteVisibilityWithModal.style.display = "none";
  modalUpdate.style.display = "block";
};

modalUpdate.addEventListener("click", (event) => {
  if (event.target === modalUpdate) {
    modalUpdate.style.display = "none";
    document.location.reload("/mynotes");
  }
});

const updateNoteInModal = async (id, e) => {
  e.preventDefault();
  let day = dayToUpdate.value;
  let date = dateToUpdate.value;
  let content = textareaToUpdate.value;
  try {
    if (day && date && content) {
      const response = await fetch(`/api/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day,
          date,
          content,
        }),
      });
      if (response.ok) {
        noteForm.reset();
        modal.style.display = "none";
        noteVisibilityWithModal.style.display = "flex";
        document.location.replace("/mynotes");
      } else {
        console.error("Failed to update note content.");
      }
    }
  } catch (error) {
    console.error("An error occurred during the fetch request:", error);
  }
};

const handleEditNote = async (e) => {
  console.log("Run");
  if (e.target.hasAttribute("update-note-id")) {
    const id = e.target.getAttribute("update-note-id");
    const noteData = await getNoteDataById(id);

    const { day, date, content } = noteData;

    dayToUpdate.value = day;
    dateToUpdate.value = date;
    textareaToUpdate.value = content;

    showNoteModalFormToUpdate();

    noteUpdateForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      await updateNoteInModal(id, e);
    });
  }
};

deleteNote.addEventListener("click", deleteNoteHandler);

noteForm.addEventListener("submit", addNewNoteHandler);

updateNote.forEach((updateIcon) => {
  updateIcon.addEventListener("click", handleEditNote);
});
