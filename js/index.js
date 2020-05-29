let storesList = document.querySelector('.stores-list');

var map;
let markers = [];
let infoWindow;
function initMap() {
  let losAngeles = {
       lat: 34.063380,
       lng: -118.358080
  }
  map = new google.maps.Map(document.getElementById('map'), {
    center: losAngeles,
    zoom: 8
  });
  infoWindow = new google.maps.InfoWindow();
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
        let name = store.name;
        let address = store.addressLines[0];
        let statusText = store.openStatusText;
        let phoneNumber = store.phoneNumber;
        createMarker(latlng,name,address,statusText,phoneNumber);
        bounds.extend(latlng);
    });
        map.fitBounds(bounds);
}

function createMarker(latlng,name,address,statusText,phoneNumber) {
   let html = " ";

          html += `
              <div class="store-info-window">
                  <div class="store-info-name">${name}</div>
                  <div class="store-info-status">${statusText}</div>
                  <div class="store-info-address"><div class="circle"><i class="fas fa-location-arrow"></div></i>${address}</div>
                  <div class="store-info-phone"><div class="circle"><i class="fas fa-phone-alt"></i></div>${phoneNumber}</div>
              </div>
          `

   let marker = new google.maps.Marker({
     map: map,
     position: latlng
   });
   google.maps.event.addListener(marker, 'mouseover', function() {
     infoWindow.setContent(html);
     infoWindow.open(map, marker);
   });
   markers.push(marker);
 }
