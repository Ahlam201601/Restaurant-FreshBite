function ShowSidebar(){
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display = "flex"
}
function HideSidebar(){
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display = "none"
}

const Send = document.getElementById("Send")
Send.addEventListener("click", function SendMessage(e){
  e.preventDefault();
  const name = document.getElementById("message").value
  const email = document.getElementById("email").value
  const message = document.getElementById("message").value
  const champ = document.getElementById("champ")
  const success = document.getElementById("success")
  const emailregex = document.getElementById("emailregex")

  // if (name === "" || email === "" || message === "") {
  //   champ.textContent = " All fields are required !";
  //   champ.style.color = "red";
  //   success.textContent = ""
  // }else if(email.match(/^[a-zA-Z0-9._%+-]+@gmail.com$/)){
  //   emailregex.textContent = ""
  // }else{
  //   emailregex.textContent = "Invalid email address.";
  //   emailregex.style.color = "red";
  //   champ.textContent = "";
  //   success.textContent = ""
  // }

  // if( name !== "" && email !== "" && message !==""){
  //   success.textContent = "successfully";
  //   success.style.color = "green";
  //   champ.textContent = ""
  // }

  if (name === "" || email === "" || message === "") {
    champ.textContent = "All fields are required !";
    champ.style.color = "red";
    success.textContent = ""
  } else if (!email.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)) {
    emailregex.textContent = "Invalid email address.";
    emailregex.style.color = "red";
    champ.textContent = ""
    success.textContent = ""
  } else {
    success.textContent = "successfully";
    success.style.color = "green";
    champ.textContent = ""
  }

})
