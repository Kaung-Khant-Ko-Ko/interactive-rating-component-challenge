var rate = null;

$(".rating").on("click", function () {
  if ($(".rating").hasClass("selected")) {
    $(".rating").removeClass("selected");
  }
  rate = this.id;
  $("#" + rate).addClass("selected");
});

$("#submit-btn").on("click", function () {
  if (rate !== null) {
    $("#thankyou-state").removeClass("hide");
    $("#rating-state").addClass("hide");
    $("#rate").text(rate.slice(-1));
  }
});
