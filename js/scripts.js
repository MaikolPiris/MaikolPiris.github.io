$(document).ready(function(){
  $("#description1").click(function(){
    if ($("#description1Response").hasClass("hide")){  
      $("#description1Response").slideDown(500);
      $("#description1Response").removeClass("hide");
      $("#description1 i").removeClass("fa-plus-circle");
      $("#description1 i").addClass("fa-minus-circle");
    }
    else{
      $("#description1Response").slideUp(500);
      $("#description1Response").addClass("hide");
      $("#description1 i").removeClass("fa-minus-circle");
      $("#description1 i").addClass("fa-plus-circle");
    }
  });

  $("#description2").click(function(){
    if ($("#description2Response").hasClass("hide")){  
      $("#description2Response").slideDown(500);
      $("#description2Response").removeClass("hide");
      $("#description2 i").removeClass("fa-plus-circle");
      $("#description2 i").addClass("fa-minus-circle");
    }
    else{
      $("#description2Response").slideUp(500);
      $("#description2Response").addClass("hide");
      $("#description2 i").removeClass("fa-minus-circle");
      $("#description2 i").addClass("fa-plus-circle");
    }
  });

  $("#description3").click(function(){
    if ($("#description3Response").hasClass("hide")){  
      $("#description3Response").slideDown(500);
      $("#description3Response").removeClass("hide");
      $("#description3 i").removeClass("fa-plus-circle");
      $("#description3 i").addClass("fa-minus-circle");
    }
    else{
      $("#description3Response").slideUp(500);
      $("#description3Response").addClass("hide");
      $("#description3 i").removeClass("fa-minus-circle");
      $("#description3 i").addClass("fa-plus-circle");
    }
  });

  $("#description4").click(function(){
    if ($("#description4Response").hasClass("hide")){  
      $("#description4Response").slideDown(500);
      $("#description4Response").removeClass("hide");
      $("#description4 i").removeClass("fa-plus-circle");
      $("#description4 i").addClass("fa-minus-circle");
    }
    else{
      $("#description4Response").slideUp(500);
      $("#description4Response").addClass("hide");
      $("#description4 i").removeClass("fa-minus-circle");
      $("#description4 i").addClass("fa-plus-circle");
    }
  });

  //Scrollspy
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
//Validación de formularios
function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.getElementById('status').innerHTML = "Nombre no puede ser vacío";
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
        document.getElementById('status').innerHTML = "Campo de mensaje no puede estar vacío";
        return false;
    }
    document.getElementById('status').innerHTML = "Enviando...";
    document.getElementById('contact-form').submit();
}