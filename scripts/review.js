function readMainInfo() {
  db.collection("gyms").doc("01").collection("reviews").doc(01).onSnapshot(function (snap) {
    console.log(snap.data().name);
    document.getElementById("item").innerText = snap.data().name;
  })
}
readMainInfo();