var Click_me_btn= document.getElementById("clickme");
Click_me_btn.addEventListener('click',display);
function display() {
  alert(" this is alert");
  document.body.style.backgroundColor = "yellow";
  document.getElementById("text-change").innerHTML = "This Test has been changed!";
  Click_me_btn.textContent="clicked"

  //new element creation and insertion 
  var h1=document.createElement("h1");
  h1.textContent="This H1 is appended";
  document.body.appendChild(h1)
}

function displayans(){
    console.log("Hello");
}

displayans();