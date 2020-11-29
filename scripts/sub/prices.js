var id = localStorage.getItem("doc-id");

function readPriceInfo() {
  db.collection("gyms").doc(id).onSnapshot(function (snap) {
    var list = snap.data().prices;
    console.log(list[0]);
    document.getElementById("membership").innerHTML += "<li> Annual Pass: $" + list[2] + "</li>";
    document.getElementById("membership").innerHTML += "<li> Montly Pass: $" + list[1] + "</li>";
    document.getElementById("daily").innerHTML += "<li> Drop-In : $" + list[0] + "</li>";
    document.getElementById("rating").innerHTML =  getStars(snap.data().ratings[4]);

  })
}
readPriceInfo();