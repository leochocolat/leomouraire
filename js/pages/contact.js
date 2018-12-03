$(".big-container-choices").mousemove(function(e){

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



$(".container-choices-form").mousemove(function(e){

  let posTop = $(".container-choices-form").offset().top;
  let posLeft = $(".container-choices-form").offset().left;
  let blocHeight = $(".container-choices-form").height();
  let eltHeight = $(".container-choice").height();
  let mouseY = e.pageY - window.innerHeight/2;


});
