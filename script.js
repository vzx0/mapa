var map = L.map('map').setView([-23.556543746713345, -46.313536129150606], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-23.556543746713345, -46.313536129150606]).addTo(map);

navigator.geolocation.getCurrentPosition(function (position) {
    var la = position.coords.latitude;
    var lo = position.coords.longitude;

    var popup = L.popup()
        .setLatLng([la, lo])
        .setContent("Você está aqui!")
        .openOn(map);

    L.Routing.control({
        waypoints: [
            L.latLng(la, lo),
            L.latLng(-23.556543746713345, -46.313536129150606)
        ]
    }).addTo(map);
});