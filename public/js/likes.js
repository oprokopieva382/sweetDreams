const likeSongIcons = document.querySelectorAll(".likemusic");
const favIcon = document.querySelectorAll(".fav-icon");

//logic to handle like song with event listener and fetch request
const likeSongHandler = async (songId) => {
  try {
    const response = await fetch(`/api/likes/songlike`, {
      method: "POST",
      body: JSON.stringify({ song_id: parseInt(songId) }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    response.ok
      ? console.log("Song liked")
      : console.error("Failed to like the song");
  } catch (error) {
    console.error("Error occurred while liking the song", error);
  }
};

likeSongIcons.forEach((icon) => {
  icon.addEventListener("click", () => likeSongHandler(icon.dataset.songId));
});

//logic to handle like video with event listener and fetch request
for (i of favIcon) {
  i.addEventListener("click", function (e) {
    like(e.target.dataset.id);
  });
}

const like = async (id) => {
  const response = await fetch("/api/likes/videolike", {
    method: "POST",
    body: JSON.stringify({ video_id: parseInt(id) }),
    headers: { "Content-Type": "application/json" },
  });

  console.log(response);
};
