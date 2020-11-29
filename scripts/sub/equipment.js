// Read gym name and set website and phone number.
var id = localStorage.getItem("doc-id");

function readMainInfo() {
  db.collection("gyms").doc(id).onSnapshot(function (snap) {
    var cardio = snap.data().equipment.available.cardio;
    var lower = snap.data().equipment.available.lowerbody;
    var upper = snap.data().equipment.available.upperbody;
    for (const key in cardio){
      // console.log(cardio[key]);
      document.getElementById("cardio").innerHTML += "<li>" + cardio[key] + "</li>";
    }

    for (const key in lower){
      document.getElementById("lowerbody").innerHTML += "<li>" + lower[key] + "</li>";
    }
    
    for (const key in upper){
      document.getElementById("upperbody").innerHTML += "<li>" + upper[key] + "</li>";
    }
    // var obj = JSON.parse(snap.data().equipment);
    // document.getElementById("cardio").innerText = snap.data().name;
    // document.getElementById("lowerbody").href = snap.data().website;
    // document.getElementById("upperbody").href = snap.data().phone;
    // var gymImg = localStorage.getItem("gym-img")
    //document.getElementById("menu-img").src = "/images/full-logo.png";

    window.localStorage.setItem("map-lat", snap.data().lat);
    window.localStorage.setItem("map-lng", snap.data().lng);
    document.getElementById("rating").innerHTML =  getStars(snap.data().ratings[2]);


  })
}
readMainInfo();

// docRef.get().addOnCompleteListener(new OnCompleteListener<DocumentSnapshot>() {
//   @Override
//   public void onComplete(@NonNull Task<DocumentSnapshot> task) {
//       if (task.isSuccessful()) {
//           DocumentSnapshot document = task.getResult();
//           if (document != null) {
//               Log.d(TAG, "DocumentSnapshot data: " + task.getResult().getData());
//               for(Object item : task.getResult().getData().values())
//                   allowedData.add(item.toString());
//           } else {
//               Log.d(TAG, "No such document");
//           }
//       } else {
//           Log.d(TAG, "get failed with ", task.getException());
//       }
//   }
// });