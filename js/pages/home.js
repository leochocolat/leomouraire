$("body").mousemove(function(e){

  let posX = e.pageX;
  let posY = e.pageY;

  let cursorMove = new TimelineMax();

  cursorMove.add([
    TweenMax.to(".bubble", .3, {left: posX, top: posY, ease: Power1.easeOut})
  ]);

});

$(document).ready(function(){
  let contentAppear = new TimelineMax();

  contentAppear.add([
    TweenMax.staggerTo(".move-up", .5, {y:0, ease:Power2.easeInOut}, .05),
    TweenMax.to(".appear", .5, {autoAlpha: 1, ease:Power0.easeInOut})
  ]);
});

$(".link").click(function(){
  let pageLeave = new TimelineMax();

  pageLeave.add([
    TweenMax.staggerTo(".move-up", .5, {y:"100%", ease:Power2.easeInOut}, .05),
    TweenMax.to(".appear", .5, {autoAlpha: 0, ease:Power0.easeInOut}),
    TweenMax.staggerTo(".menu-item", .5, {color: "black", ease:Power2.easeInOut}, .05),
  ]);
});

$("").mouseout(function(){

});

$("").hover(function(){

});

$(".skip-btn").click(function(){
  setTimeout(function(){
     location.href = "";
   }, 3000);
   $("body").toggleClass("page-leave");
});


// INPUT function
let namePost = "An Interactive Developer";
let input = document.getElementById("input");

 function myFunction(){
   inputValue = document.getElementById("input").value;

   for(i=0; i < inputValue.length ; i++) {

     if( i == 0 ) {
       $("#input").val( namePost.charAt(i));
     } else {
       $("#input").val( $("#input").val() + namePost.charAt(i));
     }

   }
 };






//fin
