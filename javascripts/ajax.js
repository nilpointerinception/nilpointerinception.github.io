$(function() {

  var newPost;
  var count = 0;
  var pages = ["1designer.html", "2rather.html", "3authors.html", "4support.html"];

  $("#ajaxButton").click(function() {
    newPost = "<div id='post" + count + "' class='newPost'></div>";
    $.post("html/" + pages[count], function(data) {
      $("section").append(newPost);
      $("#post" + count).html(data);
      $("#post" + count).slideDown(1250);
      $(location).attr('href', '#post' + count);
      count++;
    });
    if (count >= 3) {
      $("#ajaxButton").fadeOut(800);
    }
  });

});
