function getGyms(){
  db.collection("gyms")
  .get()
  .then(function(snap){
    snap.forEach
  })
}