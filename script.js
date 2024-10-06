// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}
window.onload = type; // TEXT EFFECT
var i = 0;
var txt = "Innovative Web Design Tailored for You";

var speed = 50;

function type() {
  if (i < txt.length) {
    document.getElementById("suf").innerHTML += txt.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}
// Function to open the sidebar when the hamburger icon is clicked
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

// Function to close the sidebar when the "Close" button or a link is clicked
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
