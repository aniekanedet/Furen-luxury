// Responsive menu
function myFunction() {
    var x = document.getElementById("navTop");
    if (x.className === "nav-top") {
      x.className += " responsive";
    } else {
      x.className = "nav-top";
    }
  }