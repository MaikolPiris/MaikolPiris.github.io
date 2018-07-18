$(document).ready(function(){
  $(document).scroll("on",function(){
    if ($(document).scrollTop()>75){
      $(".navbar").addClass("navbarScroll")
      $(".navbar-brand").hide();
      $(".navbar-nav").removeClass("col-sm-6");
      $(".navbar-nav").addClass("col-sm-12")
    } else{
      $(".navbar").removeClass("navbarScroll")
      $(".navbar-brand").fadeIn("slow");
      $(".navbar-nav").removeClass("col-sm-12");
      $(".navbar-nav").addClass("col-sm-6")
      $(".navbar-brand").fadeIn("slow");
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