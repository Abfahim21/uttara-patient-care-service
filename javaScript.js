$(function () {
  $(window).load(function () {
    //on production change 3000 to 500
    $(".pageloader").delay(3000).slideUp(800);
    $("#loading-text").addClass("text-success").html("page loaded");
  });
});
