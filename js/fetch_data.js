// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCcVkW76-oIEBEdaPSaRDT1Mxd8EmJKQow",
  authDomain: "rit-facility-status.firebaseapp.com",
  databaseURL: "https://rit-facility-status.firebaseio.com",
  projectId: "rit-facility-status",
  appId: "1:501771417828:web:ccd0c81d7761ba72ae14f1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

let hot_tub_open;

//Read our data from the DB
// firebase
//   .database()
//   .ref("/hot_tub_open/")
//   .once("value")
//   .then(function(snapshot) {});

var test = database.ref("/hot_tub_open/");
test.on("value", function(snapshot) {
  hot_tub_open = snapshot.val();

  //Change the element depending on val
  if (hot_tub_open) {
    //Change the alert to green
    $("#hot-tub").removeClass("alert-danger");
    $("#hot-tub").removeClass("alert-secondary");
    $("#hot-tub").addClass("alert-success");
    //Change the text to open
    $("#hot-tub").html("Open ✔");
  } else {
    //Change the alert to red
    $("#hot-tub").removeClass("alert-success");
    $("#hot-tub").removeClass("alert-secondary");
    $("#hot-tub").addClass("alert-danger");
    //Change the text to closed
    $("#hot-tub").html("Closed ❌");
  }
});
