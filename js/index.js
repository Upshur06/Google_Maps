let storesList = document.querySelector('.stores-list');

var map;
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

// displayStores();
