// Google Mpas

function initMap() {
  // Map options
var options = {
    zoom:15,
    center:{lat:49.249914, lng:-123.074965 }
}

//new map
var map = new google.maps.Map(document.getElementById("map"), options);

// Add marker
var marker = new google.maps.Marker({
  position:{lat:49.249914,lng: -123.074965},
  map:map
});
}

