var id = localStorage.getItem("doc-id");

function readMainInfo() {
  db.collection("gyms").doc(id).onSnapshot(function (snap) {
    var covid = snap.data().covid;
    var services = snap.data().Services;

    for (const key in services) {
      document.getElementById("service").innerHTML += "<li>" + services[key] + "</li>";
    }
    for (const key in covid) {
      document.getElementById("covid").innerHTML += "<li>" + covid[key] + "</li>";

    }
    document.getElementById("rating").innerHTML = getStars(snap.data().ratings[3]);
    for (const key in snap.data().hours) {
      document.getElementById("hours").innerHTML += "<li>" + days[key] + ": " + snap.data().hours[key] + "</li>";
    }


  });
}
var days = {
  0: "Mon",
  1: "Tue",
  2: "Wed",
  3: "Thu",
  4: "Fri",
  5: "Sat",
  6: "Sun",
}



readMainInfo();