var form = document.querySelector("#reviewForm");
const userID = localStorage.getItem("userID");
console.log(userID);
const docID = localStorage.getItem("doc-id");
console.log(docID);

function setReview() {
	db.collection("gyms").doc(docID).collection("review");
}

//* Saving review data
form.addEventListener("submit", (e) => {
	db.collection("gyms")
		.doc(docID)
		.collection("review")
		.doc(userID)
		.add({
			Title: form.title.value,
			Review: form.review.value,
		})
		.then(function () {
			console.log("Data has been saved successfully");
		})
		.catch(function () {
			console.error("Error withing document: " + error);
		});
});
