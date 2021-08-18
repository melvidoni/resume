function updateStyle() {
  // Get the profile
  var profile = document.getElementById("profile");




MediumWidget.Init({renderTo: "#medium-widget", params: {"resource":"https://medium.com/@melvidoni","postsPerLine":1,"limit":5,"picture":"none","fields":["description","author","claps","publishAt"],"ratio":"landscape"}})



}




// Call the function when loading the site.
window.onload = updateStyle;


