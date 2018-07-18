$(document).ready(function(){
  $(document).scroll("on",function(){
    if ($(document).scrollTop()>75){
      $(".navbar").css("opacity","0.7");
      $(".navbar-brand").fadeOut("slow");
    } else{
      $(".navbar-brand").fadeIn("slow");
      $(".navbar").css("opacity","1.0");
    }
  });
  $('body').scrollspy({target: ".navbar-nav", offset: 0});   
  $("#myNavbar a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
      }, 400, function(){
         window.location.hash = hash;
      });
    }  
  });
});