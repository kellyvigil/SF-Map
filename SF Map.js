$(document).ready(function() {
 var tag = "goducks";
var url = "https://api.instagram.com/v1/tags/"+tag+"/media/recent?client_id=bd5b06bec64b41f9a9d75aba40c05962&callback=?"

$.getJSON(url).success(function(response) {
    var photos = response.data;
    $.each(photos, function(index, photo) {
        var photo_el = "<div class='ig'><a href='" + photo.link + "'><img src='" + photo.images.standard_resolution.url + "' /><p>" + photo.caption.text + "</p></a></div>";
        $('.main').append(photo_el);
        console.log(photo);
  });
}).error(function(error) {
    alert(error);
});

function initialize() {
      var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(37.760906, -122.441208)
      }
      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
      var marker1 = new google.maps.Marker({
          position: new google.maps.LatLng(37.777906, -122.419308),
          map: map,
          title: 'Half Dome'
      });
      var marker2 = new google.maps.Marker({
          position: new google.maps.LatLng(37.737906, -122.419308),
          map: map,
          title: 'marker2'
          
      });
      var marker3 = new google.maps.Marker({
          position: new google.maps.LatLng(37.767906, -122.453308),
          map: map,
          title: 'marker3'
          
      });
      var marker4 = new google.maps.Marker({
          position: new google.maps.LatLng(37.797906, -122.419308),
          map: map,
          title: 'marker4'
          
      });
      var marker5 = new google.maps.Marker({
          position: new google.maps.LatLng(37.727906, -122.469308),
          map: map,
          title: 'marker5'
          
      });
      var marker6 = new google.maps.Marker({
          position: new google.maps.LatLng(37.739966, -122.489308),
          map: map,
          title: 'marker6'
          
      });
      var marker7 = new google.maps.Marker({
          position: new google.maps.LatLng(37.747906, -122.410308),
          map: map,
          title: 'marker7'
          
      });
      var marker8 = new google.maps.Marker({
          position: new google.maps.LatLng(37.797906, -122.419308),
          map: map,
          title: 'marker8'
          
      });
    google.maps.event.addListener(marker1, 'click', function() {      
      map.setCenter(marker1.getPosition());
      alert("hey this is half dome");
    });
 
    
       google.maps.event.addListener(marker1, 'click', function() {      
      map.setCenter(marker1.getPosition());
      alert("hey this is half dome");
    });
      
    
}

google.maps.event.addDomListener(window, 'load', initialize);
 
});