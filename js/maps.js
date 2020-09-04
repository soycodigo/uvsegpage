function initMap() {
    var myLatLng = {lat: 29.042536, lng: -110.956854};
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map_canvas'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 18
    });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'UVGas'
    });
}