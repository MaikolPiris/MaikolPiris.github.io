$(document).ready(function(){
  getLocation();
  /* Funciones Auxiliares */
  function alertPos(pos){
    $("#currentLatitude").html("  "+pos.coords.latitude);
    $("#currentlongitude").html("  "+pos.coords.longitude);
    var url="https://fcc-weather-api.glitch.me/api/current?lat="+pos.coords.latitude+"&lon="+pos.coords.longitude;
    $.ajax({
      url:url,
      success:function(coord){
        $("#weatherIcon").removeClass("fa-tint");
        $("#weatherIcon").removeClass("fa-sun");
        $("#weatherIcon").removeClass("fa-cloud");
        if(coord.weather[0].main=="Clouds"){
          $("body").css("background-image","url(http://ntelemicro.com/v1/wp-content/uploads/2017/03/nublado.jpg)");
          $("#weatherIcon").addClass("fa-cloud");
        }else if(coord.weather[0].main=="Clear"){
          $("body").css("background-image","url(http://www.hdfondos.eu/preview/get_photo/47074/1920/1200)");
          $("#weatherIcon").addClass("fa-sun");
        } else if(coord.weather[0].main=="Rain"){
          $("body").css("https://wallpaperstock.net/rainy-day-wallpapers_53815_1920x1080.jpg)");
          $("#weatherIcon").addClass("fa-tint");
        }else{
        }
        $("#currentDescription").html(" "+coord.weather[0].main);
        $("#currentFDescription").html(" "+coord.weather[0].description);
        $("#currentHumidity").html(" "+coord.main.humidity+" %");
        $("#currentTemp").html(" "+coord.main.temp+" °C");
        $("#currentMinTemp").html(" "+coord.main.temp_min+" °C");
        $("#currentMaxTemp").html(" "+coord.main.temp_max+" °C");
        $("#currentClouds").html(" "+coord.clouds.all);
        $("#currentWindDirection").html(" "+coord.wind.deg+"°");
        $("#currentWindSpeed").html(" "+coord.wind.speed+" Km/h");
        $("#currentPressure").html(" "+coord.main.pressure+" Hp");

      },
      error:function(){
      alert("No se pude recoger la posicion");
    }
    });
  }
  
  function getLocation(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(alertPos);
    }
    else
       alert("Your navigator do nos support geolocation");
  }

  /* Funcionalidad */
  $("#changeTemp").click(function(){
    if($("#currentTemp").hasClass("centiger")){
      $("#currentMinTemp").removeClass("centiger");
      $("#currentTemp").removeClass("centiger");
      $("#currentMaxTemp").removeClass("centiger");
      
      $("#currentTemp").addClass("fahr");
      $("#currentMinTemp").addClass("fahr");
      $("#currentMaxTemp").addClass("fahr");
      
      $("#currentTemp").html(" "+(32+parseInt($("#currentTemp").html())*9/5)+" °F");
      $("#currentMinTemp").html(" "+(32+parseInt($("#currentMinTemp").html())*9/5)+" °F");
      $("#currentMaxTemp").html(" "+(32+parseInt($("#currentMaxTemp").html())*9/5)+" °F");
    } else {
      $("#currentTemp").addClass("centiger");
      $("#currentMinTemp").addClass("centiger");
      $("#currentMaxTemp").addClass("centiger");

      $("#currentTemp").removeClass("fahr");
      $("#currentMinTemp").removeClass("fahr");
      $("#currentMaxTemp").removeClass("fahr");
      
      $("#currentTemp").html(" "+((parseInt($("#currentTemp").html())-32)*5/9)+" °C");
      $("#currentMinTemp").html(" "+((parseInt($("#currentMinTemp").html())-32)*5/9)+" °C");
      $("#currentMaxTemp").html(" "+((parseInt($("#currentMaxTemp").html())-32)*5/9)+" °C");
    }
    
  })
});