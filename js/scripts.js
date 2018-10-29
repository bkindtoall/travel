// Business Logic for Places Visited---------

function Countries() {
  this.places = []
  this.currentId = 0
};

Countries.prototype.addPlace = function (place){
  place.id = this.assignId();
  this.places.push (place);
}
Countries.prototype.assignId = function(){
  this.currentId +=1;
  return this.currentId;
}
Countries.prototype.findPlace = function(id) {
  for (var i=0; i< this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        return this.places[i];
      }
    }
  };
  return false;
}
Countries.prototype.deletePlace = function(id) {
  for (var i=0; i< this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        return this.places[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for  places ---------
function Place(country, city, date) {
  this.country = country,
  this.city = city,
  this.date = date
};

Place.prototype.vacation = function() {
  return this.country + " " + this.city;
};


//User Interface
var Countries = new Countries();

function displayPlaceDetail(CountriesToDisplay) {
  var placesList = $("ul#places");
  var htmlForPlaceInfo = "";
  CountriesToDisplay.places.forEach(function(place) {
    htmlForPlaceInfo += "<li id=" + place.id + ">" + place.countryName + " " + place.cityName + "</li>";

  });
  placesList.html(htmlForPlaceInfo);
};


function showPlace(placeId) {
  var place = countries.findPlace(placeId);
  $("#show-place").show();
  $(".country-name").html(place.countryName);
  $(".city-name").html(place.cityName);
  $(".date-number").html(place.dateNumber);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + + place.id + ">Delete</button>");
}


function attachPlaceListeners() {
  $("ul#places").on("click", "li", function() {
    showPlace(this.id);
  });
$("#buttons").on("click", ".deleteButton", function() {
  Countries.deletePlace(this.id);
  $("#show-place").hide();
  displayPlaceDetail(Countries);
  });
};

$(document).ready(function() {
  $("form#new-contry").submit(function(event) {
    event.preventDefault();
    var inputtedCountryName = $("input#new-country-name").val();
    var inputtedCityName = $("input#new-city-name").val();
    var inputtedDatenumber = $("input#new-date-number").val();
    var newInput = new Input (inputtedCountryName, inputtedCityName, inputtedDatenumber);
    Countries.addContact(newInput);
    displayPlaceDetail(Countries);
  })
})
