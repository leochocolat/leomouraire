$("body").ready(function(){






});


//copied to clipboard


$("#email").click(function() {

  if (document.selection) { // IE
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById("email"));
      range.select();
  } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById("email"));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
  }
  document.execCommand("copy");

  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  }
  else if (document.selection) {
    document.selection.empty();
  }

  var posEmailX = $("#email").offset().left;
  var posEmailY = $("#email").offset().top;
  var emailHeight = $("#email").height();

  console.log(emailHeight);

  // $(".copy-confirmation").css("left", posEmailX);
  // $(".copy-confirmation").css("top", posEmailY);

  TweenMax.fromTo(".copy-confirmation", .2, {left: posEmailX, top: posEmailY, autoAlpha:0}, {autoAlpha: 1, left: posEmailX, top: posEmailY - 1.5 * emailHeight});
  setTimeout(function(){
    TweenMax.to(".copy-confirmation", .2, {left: posEmailX, top: posEmailY, autoAlpha:0});
  }, 1400);



});
