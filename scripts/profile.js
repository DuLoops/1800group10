function getUser() {
	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			console.log("user is signed in");
			db.collection("users")
				.doc(user.uid)
				.get()
				.then(function (doc) {

					var name = doc.data().name;
					var email = doc.data().email;
					document.getElementById("name").innerText = name;
					document.getElementById("email").innerText = email;
				})
		} else {
			console.log("no user is signed in");
		}
	})
}
getUser();

const userID = localStorage.getItem("userID");
const docID = localStorage.getItem("doc-id");
// console.log(userID);

function getReviews() {
	db.collection("gyms")
		.get()
		.then(function (snap) {
			snap.forEach(function (doc) {
				//gives each doc data
				readDocReview(doc.id, doc.data().name);
				// console.log(doc.id);
			});
		});
}
getReviews();

function readDocReview(docid, gymName) {
	db.collection("gyms")
		.doc(docid)
		.collection("review")
		.get()
		.then(function (snap) {
			snap.forEach(function (doc) {
				//if the doc mathes the user id
				if (doc.id == userID) {
					// console.log("User has a revew  " + doc.data().title);
					document.getElementById("reviews").innerHTML +=
						"<div class='item'><small>Gym: " +
						gymName +
						"</small><div class = 'item-content'><h3>" +
						doc.data().title +
						"</h3>" +
						"<p>" +
						doc.data().text +
						"</p>" +
						getStars(doc.data().rating) +
						"</div><div class='reviewButton'><button class='edit' onclick='editReview()'>Edit</button><button class='delete' onclick='deleteReview()'>Delete</button></div></div>";
				}
			});
		});
}

function deleteReview() {
	db.collection("gyms").doc(docID).collection("review").doc(userID).delete().then(function () {
		console.log("Document successfully deleted!");
		window.location.href="profile.html"
	}).catch(function (error) {
		console.error("Error removing document: ", error);
	});
}

function editReview(){
	window.location.href="sub/write_review.html";
}