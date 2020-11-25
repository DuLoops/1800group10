//* Reads the title of the review as well as the content of the review
function readMainInfo() {
	db.collection("gyms")
		.doc("01")
		.collection("reviews")
		.doc("01")
		.onSnapshot(function (snap) {
			//console.log(snap.data().title);
			document.getElementById("review1").innerText = snap.data().review;
			document.getElementById("review-title1").innerText = snap.data().title;
		});
}
readMainInfo();
