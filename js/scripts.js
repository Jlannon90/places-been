//business logic
function Trip(location, bestFood, favoriteMemory, year, season) {
  this.loc = location;
  this.grub = bestFstryood;
  this.mem = favoriteMemory;
  this.time = year;
  this.weather = season;
}

Trip.prototype.spot = function() {
  return this.loc;
}

//user interface logic

$(document).ready(function() {
  $("form#new-trip").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedFood = $("input#new-food").val();
    var inputtedMemory = $("input#new-memory").val();
    var inputtedYear = $("input#new-year").val();
    var inputtedSeason = $("input#new-season").val();

    var newTrip = new Trip(inputtedLocation, inputtedFood, inputtedMemory, inputtedYear, inputtedSeason);

    $("ul#trips").append("<li><span class='trip'>" + newTrip.spot() + "</span></li>");

    $(".trip").last().click(function() {
    $("#show-trip").show();
    $("#show-trip h2").text(newTrip.loc);
    $(".location").text(newTrip.loc);
    $(".food").text(newTrip.grub);
    $(".memory").text(newTrip.mem);
    $(".year").text(newTrip.time);
    $(".season").text(newTrip.weather);

  });
    $("input#new-location").val("");
    $("input#new-food").val("");
    $("input#new-memory").val("");
    $("input#new-year").val("");
    $("input#new-season").val("");

  });
});
