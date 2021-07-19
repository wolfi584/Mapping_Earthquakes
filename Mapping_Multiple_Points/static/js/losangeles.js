// Add console.log to check to see if our code is working.
console.log("working");
var mymap = L.map('laid').setView([34.0522, -118.2437], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(mymap);

L.marker([34.0522, -118.2437]).addTo(mymap)
  .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

L.circle([34.0522, -118.2400], 500, {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5
}).addTo(mymap).bindPopup("I am a circle.");

L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap).bindPopup("I am a polygon.");


var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(mymap);
}

mymap.on('click', onMapClick);