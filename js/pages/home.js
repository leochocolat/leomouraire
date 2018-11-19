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
   input.value = namePost;
   $("body").toggleClass("page-leave");
   document.getElementById("progression").innerHTML = "100%";

});


// INPUT function
let namePost = "An Interactive Developer";
let input = document.getElementById("input");
let progression = document.getElementById("progression");
let progressionAdvices = ["Good start", "Here we go !", "Damn Ur close", "Damnn", "Damnnn", "Damnnnn", "Damnnnnn", "Damnnnnnn", "Ok, I think you got it...", "...", "....", ".....", ".......", "How did you guess ?", "You looked into my code don't you ?", "undefined", "defined... lol", "Get it done so we can continue...", "What are you waiting for ??", "Alright I'm bored...", "3...", "2...", "1...", "Boooom", "Booooooom"];

 function myFunction(){
   inputValue = document.getElementById("input").value;

   for(i=0; i < inputValue.length ; i++) {

     if( i == 0 ) {
       $("#input").val( namePost.charAt(i));
       document.getElementById("progression-advices").innerHTML = progressionAdvices[i];
     } else {
       $("#input").val( $("#input").val() + namePost.charAt(i));
       document.getElementById("progression-advices").innerHTML = progressionAdvices[i];
     }

   }

   if( inputValue.length <= namePost.length) {
     document.getElementById("progression").innerHTML = parseInt(inputValue.length/namePost.length*100) + "%";
   } else if(inputValue.length >= namePost.length ) {
     document.getElementById("progression").innerHTML = "100%";
     document.getElementById("input").disabled = true;
     console.log("anim");

     let validAnim = new TimelineMax();

     // validAnim.add([
     //   TweenMax.staggerTo(".move-up", .3, {y:"100%", ease:Power3.easeInOut}, .03),
     //   TweenMax.staggerTo(".bloc-infos", .5, {autoAlpha:0, ease:Power3.easeInOut})
     // ]).add([
     //   TweenMax.to("#input", .3, {y:"-50%", ease:Power3.easeInOut}),
     //   TweenMax.to("#input", .6, { width:"100%", color:"white", borderColor: "white", ease:Power1.easeInOut})
     // ]);

     validAnim.add([
      TweenMax.staggerTo(".move-up", .3, {y:"100%", ease:Power3.easeInOut}, .03),
      TweenMax.staggerTo(".bloc-infos", .5, {autoAlpha:0, ease:Power3.easeInOut}),
      TweenMax.to("#input", .5, {autoAlpha:0, ease:Power3.easeInOut})
    ]);

   }


 };



//fin
