console.log('Thanks for visiting my site!');

function initMap() {
  // The location of Uluru
  var Etobicoke = {lat: 43.588332, lng: -79.533687};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 11, center: Etobicoke});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: Etobicoke, map: map});
}
