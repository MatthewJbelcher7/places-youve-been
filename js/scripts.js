// Business Logic for placesYouveBeen ---------
function VisitList() {
  this.locations ={};
}

// Business Logic for Locations ---------
function location(name, country, specialLandmarks, timeOfYear, notes) {
  this.name = name;
  this.country = country;
  this.specialLandmarks = specialLandmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

VisitList.prototype.addLocation = function(location) {
  this.locations[location.name] = location;
};

location.prototype.placeCountry =function() {
  return this.name + "" +lastName;
};