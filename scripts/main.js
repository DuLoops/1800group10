function getGyms(){
  db.collection("gyms")
  .get()
  .then(function(snap){
    snap.forEach(function (doc) {
      var name = doc.data().name;
      var rating = doc.data().ratings[0];
      console.log(name);
      var cont = document.getElementById("ww");
      cont.innerHTML += "<a href='menu.html' class='panel'></a>";
      cont.innerHTML += "<div class='item'><img src='../images/full-logo.png' alt='gym picture'/><div class='rating'><h3 class='gym-name'>" + name + "</h3><p>Overall Rating</p><span class='overall-rating'><i class='fas fa-star'><i class='fas fa-star-half-alt'></i><i class='far fa-star'></i></span></div>";
    })
  })
}
getGyms();