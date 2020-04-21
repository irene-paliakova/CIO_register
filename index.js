var mymap = L.map('mapid').setView([53.902575, 27.561374], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);


// icons creating
var flat = L.icon({
    iconUrl: 'pic/apartment.jpg',
    
    iconSize:     [30], // size of the icon
    iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -20] // point from which the popup should open relative to the iconAnchor
});

var office = L.icon({
    iconUrl: 'pic/office.png',
    
    iconSize:     [38], // size of the icon
    iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -20] // point from which the popup should open relative to the iconAnchor
});

var shop = L.icon({
    iconUrl: 'pic/shop.jpg',
    
    iconSize:     [30], // size of the icon
    iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -20] // point from which the popup should open relative to the iconAnchor
});

var indystry = L.icon({
    iconUrl: 'pic/industry.jpg',
    
    iconSize:     [30], // size of the icon
    iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -20] // point from which the popup should open relative to the iconAnchor
});


// layers creating
var flats = L.layerGroup([
    L.marker([53.902575, 27.561374], {icon: flat}).bindPopup("Площадь: 45,3 кв.м <br> Стоимость: $1250 <br> Отчет: А-26/20"), 
    L.marker([53.926941, 27.541661], {icon: flat}).bindPopup("Площадь: 36,6 кв.м <br> Стоимость: $2000 <br> Отчет: А-27/20")
]);


var offices = L.layerGroup([
    L.marker([53.858282, 27.476533], {icon: office}).bindPopup("Площадь: 150 кв.м <br> Стоимость: $1850 <br> Отчет: А-28/20"), 
    L.marker([51.854735, 26.773617], {icon: office}).bindPopup("Площадь: 300 кв.м <br> Стоимость: $180 <br> Отчет: А-3/20")
]);


var shops = L.layerGroup([
    L.marker([53.908485, 27.432956], {icon: shop}).bindPopup("Площадь: 20 000 кв.м <br> Стоимость: $1850 <br> Отчет: А-25/20")
]);


var industrial = L.layerGroup([
    L.marker([53.859246, 27.666253], {icon: indystry}).bindPopup("Площадь: 5000 кв.м <br> Стоимость: $300 <br> Отчет: А-24/20"), 
    L.marker([51.854735, 26.773617], {icon: indystry}).bindPopup("Площадь: 1000 кв.м <br> Стоимость: $50 <br> Отчет: А-3/20")
]);


// controls creating
var overlayMaps = {
    "Flats": flats,
    "Offices" : offices,
    "Shops" : shops,
    "Industrial" : industrial
};

L.control.layers(null, overlayMaps, {collapsed: false}).addTo(mymap);

L.control.scale().addTo(mymap);





    



    