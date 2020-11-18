
// Add a new document in gyms
db.collection("gyms").doc("2").set({
    name: "Steve Nash Sports Club",
    website: "https://fitnessworld.ca/",
    phone: "tel:604-421-799",
    prices: [5,50,300],
    ratings: [3,3,3,3,3],
    covid: ["Mandatory Masks", "Social Distancing"],
    equipment: {
      available:{
        cardio:["Running machine","rower"],
        lowerbody:["Squat","Leg Curl"],
        upperbody:["Bench press"]
      }
    }
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});


// Add a new document in gyms
db.collection("gyms").doc("3").set({
  name: "Fortius Fitness & Performance Centre | Burnaby",
  website: "http://www.fortiussport.com/Training?utm_source=googlemybusiness_TrainingCentre&utm_campaign=Google%20My%20Business_TrainingCentre&utm_medium=Organic",
  phone: "tel:604-292-2502",
  prices: [5,50,300],
  ratings: [3,3,3,3,3],
  covid: ["Mandatory Masks", "Social Distancing"],
  equipment: {
    available:{
      cardio:["Running machine","rower"],
      lowerbody:["Squat","Leg Curl"],
      upperbody:["Bench press"]
    }
  }
})
.then(function() {
  console.log("Document successfully written!");
})
.catch(function(error) {
  console.error("Error writing document: ", error);
});