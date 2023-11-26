var tl = gsap.timeline();
tl.from("#nav img, #nav h3 , #nav h4 , #nav button", {
  y: -100,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.2,
});

tl.from("#main h1", {
  y: 100,
  opacity: 0,
  stagger: 0.3,
});
tl.from("#main > img", {
  opacity: 0,
  //   scale: 0,
  x: 400,
  stagger: 0.5,
});
tl.from("#Announcement", {
  opacity: 0,
  scale: 0,
  y: 300,
});
tl.from("#scroll", {
  opacity: 0,
  scale: 0,
  y: 300,
  //   repeat:-1
});
tl.to("#scroll", {
  y: 30,
  repeat: -1,
  duration: 0.5,
  yoyo: true,
});
