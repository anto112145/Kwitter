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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
   msg = document.getElementById("msg").value;

   firebase.database().ref(room_name).push({
      Name : user_name,
      Message : msg
   });
}










window.addEventListener("keydown" , mykeydown);

function mykeydown(e){
   ascii = e.keyCode;

   if(ascii == 13)
   {
    msg = document.getElementById("msg").value;

   firebase.database().ref(room_name).push({
    Name : user_name,
    Message : msg
   })
   }
}


//<h4>Name : Message </h4> 



  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
       console.log( message_data);

      Name = message_data["Name"];
      Message = message_data["Message"];
      nameandmsg = '<h4>' + Name + " : " + Message + '</h4>';
      document.getElementById("output").innerHTML += nameandmsg;
//End code
      } });  }); }
getData();



function logout() 
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
