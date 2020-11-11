// Google Mpas
function initMap() {
  // Map options
  var options = {
    zoom: 15,
    center: {
      lat: 49.249914,
      lng: -123.074965
    }
  }

  //new map
  var map = new google.maps.Map(document.getElementById("map"), options);

  // Add marker
  var marker = new google.maps.Marker({
    position: {
      lat: 49.249914,
      lng: -123.074965
    },
    map: map
  });
}


// Read gym name and set website and phone number.
function readMainInfo() {
  db.collection("gyms").doc("01").onSnapshot(function (snap) {
    // console.log(snap.data().name);
    document.getElementById("gym-name").innerText = snap.data().name;
    document.getElementById("gym-link").href = snap.data().website;
    document.getElementById("phone").href = snap.data().phone;
  })
}
readMainInfo();
