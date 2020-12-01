
var docID = localStorage.getItem("doc-id");
const userID = localStorage.getItem("userID");
//* Reads the title of the review as well as the content of the review
function readMainInfo() {
	db.collection("gyms")
		.doc(docID)
		.collection("review")
		.get()
		.then(function (snap) {
				snap.forEach(function (doc) {
						//gives each doc data
						document.getElementById("user-reviews").innerHTML += "<div class ='item'><h3>"+doc.data().user+"</h3><span class = 'review-rating'>"+getStars(doc.data().rating)+"</span><h4>"+doc.data().title+"</h4><p>"+doc.data().text+"</p></div>";
				});
		});
}
readMainInfo();
function readRating() {
  db.collection("gyms").doc(docID).onSnapshot(function (snap) {
		document.getElementById("overall-rating").innerHTML = getStars(snap.data().ratings[1]);
  })
}
readRating();