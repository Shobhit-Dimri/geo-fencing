// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initAutocomplete() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -33.8688, lng: 151.2195},
        zoom: 15,
        mapTypeId: 'roadmap'
    });

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            clat=position.coords.latitude;
            clng=position.coords.longitude;
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: {lat: clat, lng: clng},
                mapTypeId: 'roadmap'
            });
        });
    }else {

    }   

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }

            // console.log(place.address_components);
           
            var sLatLong = String(place.geometry.location).substr(1).slice(0, -1);
            var aLatLong = sLatLong.split(",");

            initMap(aLatLong[0],aLatLong[1], map, place);
        });
        map.fitBounds(bounds);
        map.setCenter(bounds.getCenter());
        map.setZoom(15);
    });
}

function initMap(lat, lang, map, place) {
    // alert("Inside Init map...");//return false;
    // Create the map.
    map.center = {lat: parseFloat(lat), lng: parseFloat(lang)};
    // Set radius for circle to me drawn
    // var radius = (document.getElementById("radius").value !== "")?document.getElementById("radius").value:1;
    let radius = 5;
    var cityCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: {lat: parseFloat(lat), lng: parseFloat(lang)},
        radius: radius * 1000
    });

    // makeData(lat, lang, radius, place);
    fetchChefs(lat, lang);
}

function fetchChefs(lat, long){
    // console.log(fences);
    $.ajax({
        url: "users.php", 
        data: {lat:lat, long:long},
        type:"post",        
        success: function(result){
            alert("Success...");
            alert(result);
        }
    });
}
