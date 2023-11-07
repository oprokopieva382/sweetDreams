let FollowBox = "#Wrap .FollowBox";
gsap.set(FollowBox, {
  xPercent: -50,
  yPercent: -50,
  scale: 0,
});

window.addEventListener("mousemove", (e) => {
  let mapper = gsap.utils.mapRange(0, 30, 0, 1);
  let speed = Math.abs(e.movementX) + Math.abs(e.movementY);
  let mappedSpeed = mapper(speed);
  let clamp = gsap.utils.clamp(0, 1);

  gsap.to(FollowBox, {
    duration: 0.5,
    overwrite: "auto",
    x: e.clientX,
    y: e.clientY,
    stagger: 0.1,
    ease: "none",
  });

  gsap.to(FollowBox, {
    ease: "none",
    duration: 0.3,
    overwrite: "auto",
    stagger: 0.1,
    scale: clamp(mappedSpeed),
  });
});