 
  const firebaseConfig = {
    apiKey: "AIzaSyDrlBus06aYBd6rcq1v5tz6_ul-ZvKvpOs",
    authDomain: "smartwaste-fe398.firebaseapp.com",
    projectId: "smartwaste-fe398",
    storageBucket: "smartwaste-fe398.appspot.com",
    messagingSenderId: "202936056207",
    appId: "1:202936056207:web:f11649a9ddfccf2afa73fa",
    measurementId: "G-F1277WHM5B"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log("logged in");
    
        const mkoolima_user = firebase.auth().currentUser;
        //what will displayed on the header
        var jina = mkoolima_user.displayName;
        
        var photo = mkoolima_user.photoURL;
    
        if (jina === null){
        //if no dispaly name, we use the email address
        jina = mkoolima_user.email;
        }
        $('#user_profile').html(jina);
        if (photo != null){
            //use the google photo
            $("#avatar").attr("hidden", true);
            $("#user_photo").attr("hidden", false);
            $("#user_photo").attr("src", photo);
        }
    } else {
        console.log("Not logged in");
        window.location.replace("login.html");
    }
    });
});
