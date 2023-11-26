gsap.from("#page1 #box", {
  opacity: 0,
  scale: 0,
  rotate: 360,
  duration: 1,
  delay: 1,
});
gsap.from("#page2 #box", {
  opacity: 0,
  scale: 0,
  rotate: 360,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 70%",
    end: "top 30%",
    scrub: 2,
  },
});
