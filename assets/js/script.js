function updateStyle() {
  // Get the profile
  var profile = document.getElementById("profile");

  // Create the new element
  var rmit = document.createElement("img");
  rmit.setAttribute("border", "0");
  rmit.setAttribute("src", "/img/ORCID.png");
  rmit.setAttribute("width", "30%");
  rmit.classList.add("logoimg");

  // Append
  profile.appendChild(rmit);


//MediumWidget.Init({renderTo: "#medium-widget", params: {"resource":"https://medium.com/@melvidoni","postsPerLine":1,"limit":5,"picture":"none","fields":["description","author","claps","publishAt"],"ratio":"landscape"}})



}




// Call the function when loading the site.
window.onload = updateStyle;


