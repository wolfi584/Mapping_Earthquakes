// Add console.log to check to see if our code is working.
console.log("working");
var map = L.map('usaid').setView([37.0902, -95.7129], 4);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(map);

// An array containing each city's location, state, and population.
let cities = [{
  location: [40.7128, -74.0059],
  city: "New York City",
  state: "NY",
  population: 8398748
},
{
  location: [41.8781, -87.6298],
  city: "Chicago",
  state: "IL",
  population: 2705994
},
{
  location: [29.7604, -95.3698],
  city: "Houston",
  state: "TX",
  population: 2325502
},
{
  location: [34.0522, -118.2437],
  city: "Los Angeles",
  state: "CA",
  population: 3990456
},
{
  location: [33.4484, -112.0740],
  city: "Phoenix",
  state: "AZ",
  population: 1660272
}
];

// Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
  console.log(city)

  L.circleMarker(city.location,
    {
      radius: city.population/100000
    })
    .setStyle({ 
      color: 'orange',
      fillColor: 'orange',
      fillOpacity: 0.5,
      lineWeight: 4
    })
    
    .addTo(map).bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + numberWithCommas(city.population) + "</h3>");
 });
