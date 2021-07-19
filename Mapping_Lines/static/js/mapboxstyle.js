mapboxgl.accessToken = 'pk.eyJ1IjoiZGVuZG8iLCJhIjoiY2tyMTBtMHFnMXg3djJ2bGZtcWQ4YjhlMyJ9.nwrqjqyJoNn7OQwkzFt8hA';
var map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/satellite-v9', // style URL
center: [-2.81361, 36.77271], // starting position [lng, lat]
zoom: 4 // starting zoom
});
 
var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');
 
function switchLayer(layer) {
var layerId = layer.target.id;
map.setStyle('mapbox://styles/mapbox/' + layerId);
}
 
for (var i = 0; i < inputs.length; i++) {
inputs[i].onclick = switchLayer;
}