//  Location and map variables
var firstMap;
var favoritePlaces = [
    {content:'Cartagena, Colombia', coordinates:{lat:10.422,lng:-75.537}},
    {content:'Romeoville, IL', coordinates:{lat:12.432,lng:43.234}}
];

var flightPlanCoordinates = [
    {lat: 37.772, lng: -122.214},
    {lat: 21.291, lng: -157.821},
    {lat: -18.142, lng: 178.431},
    {lat: -27.467, lng: 153.027}
  ];
  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(firstMap);
}

function initApplication() {
    console.log('Starting up...');
}

function initMap() {
    // Creates a new map
        firstMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.878, lng: 10}, zoom: 4});

    // Marker for Colombia    
    var marker = new google.maps.Marker({position:{lat:10.422930,lng:75.537262}, map:firstMap})    
   
    // loc2 is in the Lat and Lng values - this checks to see if Colombia is currently displayed on the map
    if (firstMap.getBounds().contains(favoritePlaces)) {
         inBounds = true;
         console.log('Location 2 is displayed on the map.');
}
    // bounds_changed function
    google.maps.event.addListener(firstMap, 'idle', function() {
        console.log('Bounds changed implemented')
        var zoomLevel = firstMap.getZoom() // get zoom function

    
    });
}


