
// Read gym info
function readMainInfo() {
  db.collection("gyms").doc("01").onSnapshot(function (snap) {
    // console.log(snap.data().name);
    document.getElementById("gym-name0").innerText = snap.data().name;
  })
}
readMainInfo();