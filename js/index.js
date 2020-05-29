let storesList = document.querySelector('.stores-list');

var map;
let markers = [];
function initMap() {
  let losAngeles = {
       lat: 34.063380,
       lng: -118.358080
  }
  map = new google.maps.Map(document.getElementById('map'), {
    center: losAngeles,
    zoom: 8
  });
  displayStores();
  showStoresMarker();
;}


function displayStores(){
  let storesHtml = "";
    stores.forEach(function(store, index){
        let address = store.addressLines;
        let phoneNumber = store.phoneNumber;
          storesHtml += `
              <div class="store-container">
                    <div class="store-info-container">
                        <div class="store-address">
                          <span>${address[0]}</span>
                          <span>${address[1]}</span>
                        </div>
                        <div class="store-phone-number">${phoneNumber}</div>
                    </div>
                    <div class="store-number-container">
                        <div class="store-number">
                            ${index + 1}
                        </div>
                    </div>
              </div>
          `
    });
          storesList.innerHTML = storesHtml;
}

function showStoresMarker(){
  let bounds = new google.maps.LatLngBounds();
    stores.forEach(function(store, index){
        let latlng = new google.maps.LatLng(
            store.coordinates.latitude,
            store.coordinates.longitude);
            console.log(latlng);
        let name = store.name;
        let address = store.addressLines[0];
        createMarker(latlng,name,address);
        bounds.extend(latlng);
    });
        map.fitBounds(bounds);
}

function createMarker(latlng, name, address) {
   let html = "<b>" + name + "</b> <br/>" + address;
   let marker = new google.maps.Marker({
     map: map,
     position: latlng
   });
   // google.maps.event.addListener(marker, 'click', function() {
   //   infoWindow.setContent(html);
   //   infoWindow.open(map, marker);
   // });
   markers.push(marker);
 }
