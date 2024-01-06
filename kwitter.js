function login()
{
  username = document.getElementById("input1").value;
  localStorage.setItem("user_name", username);

  window.location = "kwitter_room.html";
}