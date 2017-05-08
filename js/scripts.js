//business logic
function Trip(location, bestFood, favoriteMemory, year, season) {
  this.loc = location;
  this.grub = food;
  this.mem = favoriteMemory;
  this.time = year;
  this.weather = season;
}

Trip.prototype.spot = function() {
  return this.loc;
}

//user interface logic

$(function() {
  $("form#new-trip").submit(function(event) {

  var inputtedLocation = $("input#new-location").val();
  var inputtedFood = $("input#new-food").val();
  var inputtedMemory = $("input#new-memory").val();
  var inputtedYear = $("input#new-year").val();
  var inputtedSeason = $("input#new-season").val();

  var newTrip = new Trip(inputtedLocation, inputtedFood, inputtedMemory, inputtedYear, inputtedSeason);





  });






});
