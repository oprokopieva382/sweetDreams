const newNoteBtn = document.getElementById("newNoteBtn");
const modal = document.getElementById("modal");

newNoteBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

const noteForm = document.getElementById("noteForm");

noteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get form input values
  const day = document.getElementById("day").value;
  const date = document.getElementById("date").value;
  const content = document.getElementById("content").value;

  // Handle form submission (e.g., save the note and display it)
  displayCreatedNote(day, date, content);

  // Reset the form
  noteForm.reset();

  modal.style.display = "none";
});

function displayCreatedNote(day, date, content) {
  // You can create a new note element and add it to your note list or display it as desired.
  // For this example, we'll just log the values to the console.
  console.log(`Day of the Week: ${day}`);
  console.log(`Date: ${date}`);
  console.log(`Note Text: ${content}`);
}

