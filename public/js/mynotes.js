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

  // Handle form submission (e.g., save the note and display it)
  if (day && date && content) {
    const response = await fetch(`/api/notes`, {
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
      document.location.replace("/profile");
    } else {
      alert("Failed to create project");
    }
    //   displayCreatedNote(day, date, content);
  }
};

// function displayCreatedNote(day, date, content) {
// You can create a new note element and add it to your note list or display it as desired.
// For this example, we'll just log the values to the console.
//   console.log(`Day of the Week: ${day}`);
//   console.log(`Date: ${date}`);
//   console.log(`Note Text: ${content}`);
// }

noteForm.addEventListener("submit", addNewNoteHandler);
