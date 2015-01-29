$(function() {
  $("#ajaxButton").click(function() {
    $.post("external.php", function(data) {
      $("#name").html(data);
    });
  });
});
