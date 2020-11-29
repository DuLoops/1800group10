var id = localStorage.getItem("doc-id");

function readMainInfo() {
  db.collection("gyms").doc(id).onSnapshot(function (snap) {
    var covid = snap.data().covid;
    var services = snap.data().Services;

    for (const key in services) {
      document.getElementById("service").innerHTML += "<li>" + services[key] + "</li>";
    }
    console.log(services);
    for (const key in covid) {
      document.getElementById("covid").innerHTML += "<li>" + covid[key] + "</li>";
    
    }
    document.getElementById("rating").innerHTML =  getStars(snap.data().ratings[3]);

  })
}
readMainInfo();