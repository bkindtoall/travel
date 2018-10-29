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
function Place(countryName, cityName, dateNumber) {
  this.countryName = countryName,
  this.cityName = cityName,
  this.dateNumber = dateNumber
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
  var place = Countries.findPlace(placeId);
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
  $("form#new-country").submit(function(event) {
    event.preventDefault();
    var inputtedCountryName = $("input#new-country-name").val();
    var inputtedCityName = $("input#new-city-name").val();
    var inputtedDateNumber = $("input#new-date-number").val();

    $("input#new-country-name").val("");
    $("input#new-city-name").val("");
    $("input#new-date-number").val("");

    var newPlace = new Place(inputtedCountryName, inputtedCityName, inputtedDateNumber);
    Countries.addPlace(newPlace);
    displayPlaceDetail(Countries);

  });
});
