const submitBtn = document.querySelector("#submit");

let reviewTitle = document.querySelector("#reviewTitle");
let reviewContent = document.querySelector("#reviewContent");

submitBtn.addEventListener("click", function () {
	let reviewTitleInput = reviewTitle.value;
	let reviewContentInput = reviewContent.value;

	//** Access the Database Collection */
	db.collection("review")
		.add({
			Title: reviewTitleInput,
			Review: reviewContentInput,
		})
		.then(function () {
			console.log("Data Saved");
		})
		.catch(function (error) {
			console.log(error);
		}, false);
});
