$(document).ready(function() {
  $(".child").slideUp();
  console.log('loaded');
});

$(".child").on("click", function(ev) {
  $(ev.currentTarget).slideUp();
});
$(".title").on("click", function(ev) {
  var pName = $(ev.currentTarget).attr("data-name");
  var child = $('.child[data-name="' + pName + '"]');
  child.attr("data-name", pName).slideDown();
  console.log(
    "Title Name:" + pName + " child Name:" + child.attr("data-name")
  );
});
