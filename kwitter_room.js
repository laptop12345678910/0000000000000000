var  firebaseConfig = {
      apiKey: "AIzaSyCRXDiPpWRo5xzIssSUTySUaRED8NM8qeY",
      authDomain: "classtest-b5f7b.firebaseapp.com",
      databaseURL: "https://classtest-b5f7b-default-rtdb.firebaseio.com",
      projectId: "classtest-b5f7b",
      storageBucket: "classtest-b5f7b.appspot.com",
      messagingSenderId: "41278774729",
      appId: "1:41278774729:web:a24257d2112a12a5489c18"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+ user_name+"!";

function addRoom()
{                                                                                                                                                                                                                                                                    
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name",room_name);

    window.location = "kwitter_page.html";
}


function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name -" +Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
       window.location = "index.html";
}