
 var firebaseConfig = {
    apiKey: "AIzaSyAnxRLiT74bkjFDYz1waelZef5Y6BGJvDQ",
    authDomain: "let-s-chat-24746.firebaseapp.com",
    projectId: "let-s-chat-24746",
    storageBucket: "let-s-chat-24746.appspot.com",
    messagingSenderId: "1010428855359",
    appId: "1:1010428855359:web:444ed6bc068ac49d21248a"
  };
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Hello " + user_name + "!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id'  >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
