const likeSongIcons = document.querySelectorAll(".likemusic");

const likeSongHandler = async (songId) => {
  try {
    // Send a request to the server to like the song
    const response = await fetch(`/api/songs/${songId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("Song liked");
    } else {
      console.error("Failed to like the song");
    }
  } catch (error) {
    console.error("Error occurred while liking the song", error);
  }
};

likeSongIcons.forEach((icon) => {
  icon.addEventListener("click", () => likeSongHandler(icon.dataset.songId));
});

// create Async function Await > method=post>body>headers
const like = async (id) => {
  videoID = id;
  await fetch(`/api/likes`, {
    method: "POST",
    body: JSON.stringify({ videoID }),
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.JSON());
  if (response.ok) {
    console.log("like succesful!");
  } else {
    console.log("not good");
  }
};
