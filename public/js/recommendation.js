const meditation = document.getElementById("meditation");
const boringbook = document.getElementById("boringbook");
const yogamusic = document.getElementById("yogamusic");

meditation?.addEventListener("click", () => {
   document.location.href = "/meditation";
});

boringbook?.addEventListener("click", () => {
  document.location.href = "/boringbooks";
});

yogamusic?.addEventListener("click", () => {
  document.location.href = "/yogamusic";
});
