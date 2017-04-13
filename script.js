//3adc9ff1b73a2918229d8a15b7bf13d3
var btn = document.getElementById("button");
var  latlong = document.getElementById("latlong");
var  weatherType = document.getElementById("type");
var  temp = document.getElementById("temp");
window.onload = function() {
  btn.innerHTML = "THis is a button";
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      latlong.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " +
      position.coords.longitude;
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
  //   var xhr = new XMLHttpRequest();
    //  xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&APPID=3adc9ff1b73a2918229d8a15b7bf13d3", false);
  //   xhr.send();
      var parsedData = JSON.parse(xhr.responseText);
      temp.innerHTML = parsedData.name + ","  parsedData.sys.country;
      weatherType.innerHTML = parsedData.weather[0].description;
    });
  }
}
