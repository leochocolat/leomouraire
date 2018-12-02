$(".description-content").each(function(){

  let contentMoving = new TimelineMax();

  contentMoving.add([
    TweenMax.fromTo(this, 1, {x:-50, autoAlpha: 0}, {x:0, autoAlpha: 1, ease:Power1.easeInOut}),
  ])


  new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: "1",
      })
      .setTween(contentMoving)
      .addIndicators()
      .addTo(controller);

});


$(".title-section").each(function(){

  let titleMoving = new TimelineMax();

  titleMoving.add([
    TweenMax.to($(this).find(".right"), 1, {right: "100%"}),
    TweenMax.to($(this).find(".left"), 1, {left: "100%"}),
  ])


  new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: "1",
          duration: "200%",
      })
      .setTween(titleMoving)
      .addIndicators()
      .addTo(controller);

});




    // Swift




















    //
