const favIcon = document.querySelectorAll(".fav-icon");



for (i of favIcon){
  i.addEventListener("click", function (event) {
  like(event.target.dataset.id);
  
})
}

// create Async function Await > method=post>body>headers
const like = async (id) => {

  const response = await fetch('/api/likes', {
    method: "POST",
    body: JSON.stringify({ video_id: parseInt(id) }),
    headers: { "Content-Type": "application/json" },
  })

  // console.log(response);


  
  // console.log(videoID)
  
  // if (response.ok) {
  //   console.log("like succesful!");
  //   window.location.reload()
  // } else {
  //   console.log("not good");
  // }
};


