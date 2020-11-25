var img = {
	one: "/images/anytime-fitness.jpg",
	two: "/images/stevenash.jpg",
	three: "/images/fortius.jpg",
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
					"</h3><p>Overall Rating</p><span class='overall-rating'><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i><i class='far fa-star'></i></span></div></div></a>";

				// // Event listener to save doc-id
				// document.getElementById("01").addEventListener("click", async function(){
				//   // window.localStorage.setItem("doc-id", doc.id);
				//   console.log(doc.id + " is clicked");
				// });
			});
		});
}
getGyms();

//save doc id for the menu.js.
function clicked(id) {
	console.log(id + " doc entered");
	window.localStorage.setItem("doc-id", id);
}

//return image
function getImage(id) {
	if (id == 1) {
		return img.one;
	} else if (id == 2) {
		return img.two;
	} else if (id == 3) {
		return img.three;
	}
}
