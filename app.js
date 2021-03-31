gsap
  .timeline()
  .from(".right", 1, {
    opacity: 0,
    x: "500px",
    ease: Power2.easeOut,
  })
  .from(
    ".navigation",
    1,
    {
      opacity: 0,
      ease: Power2.easeOut,
    },
    "-=.5"
  );

document.getElementById("shoptrigger").addEventListener("click", (e) => {
  e.gsap.to("#shop", 1, {
    height: "50vh",
    ease: Power2.easeOut,
  });
});
