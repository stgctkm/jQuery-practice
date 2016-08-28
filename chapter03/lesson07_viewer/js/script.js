$(function(){
  $("a").click(function(){
    //console.log(this.href);
    console.log($(this).attr("href"));
    //$("img").src.val(this.href);
    $("figure img").attr("src", $(this).attr("href"));
    return false;
  }) ;
});
