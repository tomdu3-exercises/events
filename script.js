$(document).ready(function () {
  $("#stream1_btn").on("click", function () {
    // .show() method and .hide() method
    //toggle() method
    $(".stream1").slideUp();
    $(".stream1").show("slow");
    $(".stream1").show("medium");
    $(".stream1").show("fast");
    $(".stream1").show(1000);
  });
  $("#stream2_btn").on("click", function () {
    $(".stream1").slideToggle("slow");
    $(".stream2").removeClass("highlight_stream");
    $(".stream3").removeClass("highlight_stream");
    $(".stream2").addClass("highlight_stream");
  });
  $("#stream3_btn").on("click", function () {
    $(".stream1").removeClass("highlight_stream");
    $(".stream2").fadeTo(1000, 0.5);
    $(".stream3").removeClass("highlight_stream");
    $(".stream3").addClass("highlight_stream");
  });
});
