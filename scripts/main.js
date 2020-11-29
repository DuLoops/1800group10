var img = {
	one: "../images/anytime-fitness.jpg",
	two: "../images/stevenash.jpg",
	three: "../images/fortius.jpg",
};
localStorage.setItem("gym-img", img);

function getGyms() {
	db.collection("gyms")
		.get()
		.then(function (snap) {
			snap.forEach(function (doc) {
				var name = doc.data().name;
				var rating = doc.data().ratings[0];

				// console.log("loading gym: " + name + "\ndoc id: " + doc.id);
				var cont = document.getElementById("container");

				cont.innerHTML +=
					"<a href='menu.html' onclick='clicked(" +
					doc.id +
					")' class='panel'><div class='item'><img src='" +
					getImage(doc.id) +
					"' alt='gym picture' class='main-img'/><div class='rating'><h3 class='gym-name'>" +
					name +
					"</h3><p>Overall Rating</p><span id='overall-rating'>" + getStars(rating) +" </span></div></div></a>";
					console.log(getStars(rating));
				// document.getElementById("overall-rating").innerHTML += stars[rating];
			});
		});
}
getGyms();

//save doc id for the menu.js.
function clicked(id) {
	console.log(id + " doc entered");
	window.localStorage.setItem("doc-id", id);
	if (id == 1) {
		setImg = img.one;
	} else if (id == 2) {
		setImg = img.two;
	} else if (id == 3) {
		setImg = img.three;
	}
	window.localStorage.setItem("gym-img", setImg);
}

//return image
function getImage(id) {
	var setImg;
	if (id == 1) {
		setImg = img.one;
	} else if (id == 2) {
		setImg = img.two;
	} else if (id == 3) {
		setImg = img.three;
	}
	return setImg;
}
