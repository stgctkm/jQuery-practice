$(function(){
  var direction  = 1;
  $("button").click(function() {
    $("body").children().animate({"margin-left": "+=" + direction *250 +"px"}, 200);
    direction *= -1;
    // $("body").children().animate({"margin-left": "+=250px"}, 200);

    // $("nav").animate({"margin-left": "0px"}, 200);
    // $("main").animate({"margin-left": "250px"}, 500);
    // $("header").animate({"margin-left": "250px"}, 1500);
  });

});
