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
