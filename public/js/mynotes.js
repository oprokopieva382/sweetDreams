const newNoteBtn = document.getElementById("newNoteBtn");
const modal = document.getElementById("modal");
const noteVisibilityWithModal = document.getElementById("notes-card-container");
const noteForm = document.getElementById("noteForm");

newNoteBtn.addEventListener("click", () => {
  noteVisibilityWithModal.style.display = "none";
  modal.style.display = "block";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

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

noteForm.addEventListener("submit", addNewNoteHandler);
