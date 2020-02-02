function updateStyle() {
  // Get the profile
  var profile = document.getElementById("profile");

  // Create the new element
  var rmit = document.createElement("img");
  rmit.setAttribute("border", "0");
  rmit.setAttribute("src", "/img/rmitlogo.png");
  rmit.setAttribute("width", "30%");
  rmit.classList.add("logoimg");

  // Append
  profile.appendChild(rmit);
}



// Call the function when loading the site.
window.onload = updateStyle;
