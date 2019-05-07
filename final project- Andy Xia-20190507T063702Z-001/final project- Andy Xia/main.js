function openPage(evt, cityName) {
  //declare all variables
    var i, tabcontent, tablinks;
    //get elements with the class "tancontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // get the elements with the class "tablinks" and remove the active class
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // show the selected tab and add the "active" class to the correct button
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  