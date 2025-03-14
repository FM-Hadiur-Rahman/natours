/* eslint-disable */
const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZm1oYWRpdXIiLCJhIjoiY203OTF1cnE1MDBpODJqcGozcTd0cmpjNiJ9.T05rxdFXvq_36YnU67V2kA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/fmhadiur/cm792zh4800gk01s6a0ik54kv',
    scrollZoom: false,
    // center: [locations[0].coordinates[0], locations[0].coordinates[1]],
    // zoom: 9,
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};

const mapBox = document.getElementById('map');
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}
