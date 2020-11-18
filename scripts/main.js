
// Read gym info
function readMainInfo() {
  db.collection("gyms").doc("01").onSnapshot(function (snap) {
    // console.log(snap.data().name);
    document.getElementById("gym-name").innerText = snap.data().name;
    document.getElementById("gym-link").href = snap.data().website;
    document.getElementById("phone").href = snap.data().phone;
  })
}
readMainInfo();