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
  let emailContent = document.getElementById("email").innerHTML;

  document.getElementById("email").innerHTML = "Copied to clipboard";

  setTimeout(function(){
    document.getElementById("email").innerHTML = "l.mouraire@outlook.fr";
  }, 1200);



});
