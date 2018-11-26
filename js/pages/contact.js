$(".big-container-choices").mousemove(function(e){

  let sendNudesTop = $("#send-nudes").offset().top
  let mouseY = e.pageY - window.innerHeight/2;
  let mouseX = e.pageX - window.innerWidth/2;

  let slideMouse = new TimelineMax();
  slideMouse.add([
   TweenMax.to(".elt-choice", 1, {x: -mouseX * .01, y: -mouseY * .2})
  ]);

});

$(".big-container-choices").mouseleave(function(){
  let resetSlideMouse = new TimelineMax();
  resetSlideMouse.add([
   TweenMax.to(".elt-choice", 1, {y: 0, ease: Power2.easeInOut})
  ]);
})

//
