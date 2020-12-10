

// Read gym name and set website and phone number.
var id = localStorage.getItem("doc-id");

// read main info about the gym.
function readMainInfo() {
  db.collection("gyms").doc(id).onSnapshot(function (snap) {
    //console.log(snap.data().name);
    document.getElementById("gym-name").innerText = snap.data().name;
    document.getElementById("gym-link").href = snap.data().website;
    document.getElementById("phone").href = snap.data().phone;
    var gymImg = localStorage.getItem("gym-img")
    
    document.getElementById("memu-img").src =gymImg;
    document.getElementById("overall-rating").innerHTML = getStars(snap.data().ratings[0]);
    document.getElementById("review-rating").innerHTML = getStars(snap.data().ratings[1]);
    document.getElementById("equipment-rating").innerHTML = getStars(snap.data().ratings[2]);
    document.getElementById("covid-rating").innerHTML = getStars(snap.data().ratings[3]);
    
    window.localStorage.setItem("map-lat", snap.data().lat);
    window.localStorage.setItem("map-lng", snap.data().lng);

  })
}
readMainInfo();
function readPriceInfo() {
  db.collection("gyms").doc(id).onSnapshot(function (snap) {
    var list = snap.data().prices;
    console.log(list[0]);
    document.getElementById("membership").innerHTML += "<li>Annual Pass: $" + list[2] + "</li>";
    document.getElementById("membership").innerHTML += "<li>Montly Pass: $" + list[1] + "</li>";
    document.getElementById("daily").innerHTML += "<li>Drop-In: $" + list[0] + "</li>";
    // document.getElementById("rating").innerHTML =  getStars(snap.data().ratings[4]);

  })
}
readPriceInfo();



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
