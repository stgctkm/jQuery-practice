$(function(){
  var banners = ["red", "yellow", "green", "blue", "brown"];

  var number = Math.floor(Math.random() * 5);

  $("aside img").attr("src", "img/" + banners[number] + ".jpg");
});
