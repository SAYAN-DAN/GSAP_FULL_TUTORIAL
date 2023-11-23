// gsap.to("#box", {
//   x: 900,
//   y:400,
//   duration: 2,
//   delay: 1,
//   backgroundColor:"green",
//   rotate:360,
//   scale:0.5
// });

// gsap.from("#box", {
//   x: 900,
//   y:400,
//   duration: 2,
//   delay: 1,
//   backgroundColor:"green",
//   rotate:360,
//   scale:0.5
// });

// *******************************************************************************
// gsap.to("h1" , {
//   x:900,
//   backgroundColor:"#e207fa",
//   color:"green",
//   duration:2,
//   delay:1
// })
// gsap.to("h2" , {
//   x:900,
//   backgroundColor:"#eafa0c",
//   color:"#1a4552",
//   duration:2,
//   delay:3
// })
// gsap.to("h3" , {
//   x:900,
//   backgroundColor:"#b18ef5",
//   color:"#1a4552",
//   duration:2,
//   delay:5
// })

// ************************************************************************************

var tl = gsap.timeline()

tl.to("h1", {
  x:600,
  duration:1
})
tl.to("h2", {
  x:600,
  duration:1
})
tl.to("h3", {
  x:600,
  duration:1
})