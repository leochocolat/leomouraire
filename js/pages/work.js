// let controller = new ScrollMagic.Controller();

$(".page-work").mousemove(function(e){

  let mouseX = e.pageX;
  let mouseY = e.pageY;

})


$(".elt-work").each(function(){

  let onDisplay = new TimelineMax();

  onDisplay.add([
    TweenMax.to($(this), .5, {scale:1.2})
  ]).add([
    TweenMax.to($(this), 1, {x:"-25%"}),
    TweenMax.to($(this).find(".title-work"), 1, {autoAlpha: 1, x: "50%"}),
  ]).add([
    TweenMax.to($(this), 1, {autoAlpha:1, x:"1%", scale:1}),
    TweenMax.to($(this).find(".title-work"), 1, {autoAlpha: 0, x: "1%"}),
  ])

  new ScrollMagic.Scene({
          triggerElement: this,
          duration: "50%",
          triggerHook: ".5"
      })
      .setTween(onDisplay)
      .addTo(controller);

});

let work = new TimelineMax();

work.add([
  TweenMax.staggerTo(".container-elt-titre", 1, {rotation:-810, left: "48%", scale: .5, ease:Power3.easeInOut}, .05),
  TweenMax.staggerTo(".titre-clone", .5, {autoAlpha:1, ease:Power3.easeInOut}, .05),
  TweenMax.staggerTo(".titre-clone", .5, {autoAlpha:0, ease:Power3.easeInOut, delay: .5}, .05),
])


new ScrollMagic.Scene({
        triggerElement: ".bloc-titre",
        triggerHook: "0",
        offset: "50%",
        duration: "50%",
    })
    .setTween(work)
    .addTo(controller);










//MOVING ON WORK SECTIONS

$(".elt-work").mousemove(function(e){

  let movingTitleWork = $(".moving-title-work");
  let title = $(this).find("h1")[0].innerHTML;
  $(this).find("span")[0].innerHTML = title;

  for (i = 0; i <= movingTitleWork.length ; i++ ) {

  }

  let mouseX = e.pageX - $(this).offset().left;
  let mouseY = e.pageY - $(this).offset().top;


  let mouseMoveProjects = new TimelineMax();

  mouseMoveProjects.add([
    TweenMax.to($(this).find(".moving-title-work"), .5, {autoAlpha: 1, top: mouseY, left: mouseX})
  ]);

});

$(".elt-work").mouseout(function(){

  let mouseOutProjects = new TimelineMax();

  mouseOutProjects.add([
    TweenMax.to($(this).find(".moving-title-work"), 1, {autoAlpha: 0, top: "50%", left: "50%"})
  ]);

});






//
