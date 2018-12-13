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

$(".elt-choice").click(function(){

  let choiceValue = $(this).find("div")[0].innerHTML;
  let emailObj;
  let nameContact;
  let message;
  let emailAdress;

  if(choiceValue == "Send Nudes") {
    emailObj = "Some Nudes <3";
    emailAdress = "";
    nameContact = "";
    message = "";
  } else if (choiceValue == "Say Hello") {
    emailObj = "Hello";
    emailAdress = "";
    nameContact = "";
    message = "";
  } else if (choiceValue == "Spam me") {
    emailObj = "Congratulation! You are our 1 000 000TH visitor!";
    message = "Congratulation! You just won an iPhone X!!!";
    emailAdress = "";
    nameContact = "";
  } else if (choiceValue == "Work With Me") {
    emailAdress = "iloveyouleo@facebook.com";
    nameContact = "Mark Zuckerberg";
    emailObj = "I want you in my team";
    message = "Please work with me you are the best!";
  }

  let formDisplay = new TimelineMax();

  formDisplay.add([
    TweenMax.to(".elt-choice div", .5, {y: "100%", ease: Power3.easeOut}),
  ]).add([
    TweenMax.to(".container-form", .01, {display: "block", ease: Power3.easeOut}),
    TweenMax.to(".big-container-choices", .01, {display: "none", ease: Power3.easeOut}),
    TweenMax.fromTo(".container-form", .5, {autoAlpha: 0}, {autoAlpha: 1, ease: Power3.easeOut}),
  ]);

  document.getElementById("emailAdress").placeholder = emailAdress;
  document.getElementById("object").placeholder = emailObj;
  document.getElementById("name").placeholder = nameContact;
  document.getElementById("message").placeholder = message;
  object = document.getElementById("object").placeholder;

});


function autoWrite(){
  let inputValue = document.getElementById("object").value;
  for(i=0; i < inputValue.length ; i++) {
    if( i == 0 ) {
      $("#object").val(object.charAt(i));
    } else {
      $("#object").val( $("#object").val() + object.charAt(i));
    }
  }
};
