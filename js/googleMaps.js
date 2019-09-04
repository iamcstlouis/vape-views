let map;
let mapKey = 'AIzaSyD5z5hFhHU_fR14dBKSWOo_2KB4fbtP6Gs';

document.addEventListener("DOMContentLoaded", () => {
    let s = document.createElement("script");
    document.head.appendChild(s);
    s.addEventListener("load", () => {
        // Script has loaded
        console.log("script has loaded");
        map = new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: 51.507966,
                lng: -0.128018
            },
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    });
    s.src = `https://maps.googleapis.com/maps/api/js?key=${mapKey}`;
});