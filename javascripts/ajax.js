$(function() {
  $.post("external.php", function(data) {
    $(".result").html(data);
  });
});
