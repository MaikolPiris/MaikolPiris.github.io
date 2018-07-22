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
  $('body').scrollspy({target: ".navbar-nav", offset:0});   
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

function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.getElementById('status').innerHTML = "Name no puede estar vacío";
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.getElementById('status').innerHTML = "Email no puede estar vacío";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.getElementById('status').innerHTML = "Formato de EMail no válido";
            return false;
        }
    }
    var subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.getElementById('status').innerHTML = "Asunto no puede estar vacío";
        return false;
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.getElementById('status').innerHTML = "Message no puede estar vacío";
        return false;
    }
    document.getElementById('status').innerHTML = "Enviando...";
    document.getElementById('contact-form').submit();
}