const firebaseConfig = {
  apiKey: "AIzaSyBPH8uirPsmVWqxlTq164uhfe4J1jj-K4U",
  authDomain: "kwitter-3170c.firebaseapp.com",
  databaseURL: "https://kwitter-3170c-default-rtdb.firebaseio.com",
  projectId: "kwitter-3170c",
  storageBucket: "kwitter-3170c.appspot.com",
  messagingSenderId: "148735705210",
  appId: "1:148735705210:web:dc43ffa287e3dd32313bc3"
};

firebase.initializeApp(firebaseConfig);



username = localStorage.getItem("user_name");
document.getElementById("welcome").innerHTML = "Welcome " + username + "!";





function addRoom()
{
    roomname = document.getElementById("room_name").value;
    firebase.database().ref("/").child(roomname).update({
    });
    localStorage.setItem("room_name", roomname );
    window.location = "kwitter_page.html";
}




window.addEventListener("keydown" , mykeydown);

function mykeydown(e){
   ascii = e.keyCode;

   if(ascii == 13)
   {
    roomname = document.getElementById("room_name").value;
    firebase.database().ref("/").child(roomname).update({
  
    });
    localStorage.setItem("room_name", roomname );
    window.location = "kwitter_page.html";
   }
}


//<div id="Room_names" onclick="changeRoom()"> Room_names </div>


function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       
    row = '<div id="' + Room_names + '"  onclick="changeRoom(this.id)">' + Room_names + '</div><hr>';
    document.getElementById("output").innerHTML += row;
        
    });
  });
}
getData();

function changeRoom(currentroom)
{
  localStorage.setItem("room_name" , currentroom);
  window.location = "kwitter_page.html";
}



function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}