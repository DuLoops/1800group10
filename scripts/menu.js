

// Read gym name and set website and phone number.
var id = localStorage.getItem("doc-id");

function readMainInfo() {
  db.collection("gyms").doc(id).onSnapshot(function (snap) {
    //console.log(snap.data().name);
    document.getElementById("gym-name").innerText = snap.data().name;
    document.getElementById("gym-link").href = snap.data().website;
    document.getElementById("phone").href = snap.data().phone;
    // var gymImg = localStorage.getItem("gym-img")
    //document.getElementById("menu-img").src = "/images/full-logo.png";

    window.localStorage.setItem("map-lat", snap.data().lat);
    window.localStorage.setItem("map-lng", snap.data().lng);

  })
}
readMainInfo();




// Google Maps
var docLat = Number(localStorage.getItem("map-lat"));
var docLng = Number(localStorage.getItem("map-lng"));

function initMap() {
  // Map options
  var options = {
    zoom: 15,
    center: {
      lat: docLat,
      lng: docLng
    }
  }
  //new map
  var map = new google.maps.Map(document.getElementById("map"), options);

  // Add marker
  var marker = new google.maps.Marker({
    position: {
      lat: docLat,
      lng: docLng
    },
    map: map
  });
}
