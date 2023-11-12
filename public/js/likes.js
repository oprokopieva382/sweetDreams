const likeSongIcons = document.querySelectorAll(".likemusic");
const favIcon =  document.querySelectorAll(".fav-icon");

const likeSongHandler = async (songId) => {
  console.log("like")
  try {
    // Send a request to the server to like the song
    const response = await fetch(`/api/likes/songlike`, {
      method: "POST",
      body: JSON.stringify({ song_id: parseInt(songId) }),
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


for(i of favIcon){
  i.addEventListener('click', function(e){
    like(e.target.dataset.id)
  })
}
// create Async function Await > method=post>body>headers
const like = async (id) => {

  const response = await fetch('/api/likes/videolike', {
    method: "POST",
    body: JSON.stringify({ video_id: parseInt(id) }),
    headers: { "Content-Type": "application/json" },
  })

  console.log(response);


  
  // console.log(videoID)
  
  // if (response.ok) {
  //   console.log("like succesful!");
  //   window.location.reload()
  // } else {
  //   console.log("not good");
  // }
};


