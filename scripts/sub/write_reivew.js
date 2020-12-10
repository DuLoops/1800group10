var form = document.querySelector("#reviewForm");
var userID = localStorage.getItem("userID");
// console.log(userID);
var docID = localStorage.getItem("doc-id");
// console.log(docID);


//* Saving review data
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getUser();
  var userName = localStorage.getItem("userName");
  // console.log("user name is " + userName);
  var rate = getRating();
  db.collection("gyms")
    .doc(docID)
    .collection("review")
    .doc(userID)
    .set({
      title: form.title.value,
      text: form.review.value,
      user: userName,
      rating: rate
    })
    .then(function () {
      console.log("Data has been saved successfully");
      alert("Thank you for your review!");
      window.location.href="review.html"
    })
    .catch(function () {
      console.error("Error withing document: " + error);
    });
    
});

// set username to write a review.
function getUser() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log("user is signed in");
      db.collection("users")
        .doc(user.uid)
        .get()
        .then(function (doc) {
          name = doc.data().name;
          // console.log("user name is " + name);
          window.localStorage.setItem("userName", name);
        })
    } else {
      console.log("no user is signed in");
    }
  })
}

//radio button stars to ratings in int
// return rating in int out of 5
function getRating() {
  var radios = document.getElementsByName('rating');
  for (var i = 0; i < 5; i++) {
    if (radios[i].checked) {
      return 5-i;
    }
  }
  return 0;
}
