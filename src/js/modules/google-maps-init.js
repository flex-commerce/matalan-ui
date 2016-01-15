   // ===========================
   // Mapbox
   // ===========================
   var GMaps = require('../vendors/gmaps');
   var map;
   var listings = document.getElementById('listings');

   function loadResults(data) {
       var items, markers_data = [];
       if (data.length > 0) {
           items = data;

           for (var i = 0; i < items.length; i++) {
               var item = items[i];
               if (item.geometry.coordinates != undefined) {
                   var icon = '../../img/marker.svg';
                   markers_data.push({
                       lat: item.geometry.coordinates[1],
                       lng: item.geometry.coordinates[0],
                       title: item.properties.name,
                       id: item.properties.storeid,
                       icon: {
                           size: new google.maps.Size(56, 56),
                           url: icon
                       },
                       infoWindow: {
                           content: '<div id="hook" class="c-info-window__container">' + '<div class="c-info-window__title">' + item.properties.city + '</div>' + '</div>'
                       },
                       click: function(e) {
                           var element = $('[data-marker-index=' + e.id + ']');
                           setActive(element);
                           $('#store-' + e.id).get(0).scrollIntoView();

                       }

                   });
               }
           }
       }
       map.addMarkers(markers_data);
   }

   function setActive(el) {
       var siblings = listings.getElementsByTagName('div');
       for (var i = 0; i < siblings.length; i++) {
           siblings[i].className = siblings[i].className
               .replace(/active/, '').replace(/\s\s*$/, '');
       }

       el.find('.o-store-locator__listings-wrapper').addClass('active');
   }

   function printResults(data) {

       listings.innerHTML = "";
       for (var i = 0, len = data.length; i < len; i++) {
           var locale = data[i];

           // Shorten locale.feature.properties to just `prop` so we're not
           // writing this long form over and over again.
           var prop = locale.properties;

           // Each marker on the map.
           var popup = '<h3>' + prop.city + '</h3><div>';
           var link = listings.appendChild(document.createElement('a'));
           link.href = '#';
           link.id = 'store-' + prop.storeid;
           link.className = 'pan-to-marker';
           link.setAttribute("data-marker-index", prop.storeid);
           var wrapper = link.appendChild(document.createElement('div'));
           wrapper.className = 'o-store-locator__listings-wrapper';



           var detailsRow = wrapper.appendChild(document.createElement('div'));
           detailsRow.className = "row o-store-locator__listings-content u-pad-v-small";

           var listing = detailsRow.appendChild(document.createElement('div'));
           listing.className = 'col-12@xs col-6@lg';



           listing.innerHTML = '<div class="o-store-locator__listings-city">' + prop.city + '</div>';
           if (prop.address) {
               listing.innerHTML += '<div class="o-store-locator__listings-distance">' + locale.distance.toFixed(2) + ' miles away</div>';
               listing.innerHTML += '<div class="o-store-locator__listings-address u-mar-t-medium">' + prop.address + '</div>';
               listing.innerHTML += '<div class="o-store-locator__listings-postcode">' + prop.postcode + '</div>';
               popup += '<div class="quiet">' + prop.address + '</div>';
           }

           var tel = listing.appendChild(document.createElement('div'));
           tel.className = 'o-store-locator__listings-phone u-mar-t-medium';

           if (prop.phone) {
               tel.innerHTML = '<a href="tel:' + prop.phone + '">' + prop.phoneFormatted + '</a>';
           }



           var details = detailsRow.appendChild(document.createElement('div'));
           details.className = "col-12@xs col-6@lg";
           var opening = details.appendChild(document.createElement('div'));
           opening.className = 'o-store-locator__opening';
           opening.innerHTML = "";
           if (prop.hours) {
               opening.innerHTML += prop.hours;
           }

       };
   }

   $(document).on('click', '.pan-to-marker', function(e) {
       e.preventDefault();
       setActive($(this));
       var position, lat, lng, $index;

       $index = $(this).data('marker-index');
       var result = $.grep(map.markers, function(e) {
           return e.id == $index;
       });

       var marker = result[0];

       position = marker.position;

       marker.infoWindow.open();

       google.maps.event.trigger(result[0], 'click');

       lat = position.lat();
       lng = position.lng();

       map.setCenter(lat, lng);

   });

   $(document).ready(function() {
       // prettyPrint();


       // xhr.done(loadResults);
   });
   var latlng;

   function calculateDistance(lat1, lon1, lat2, lon2, unit) {
       var radlat1 = Math.PI * lat1 / 180
       var radlat2 = Math.PI * lat2 / 180
       var radlon1 = Math.PI * lon1 / 180
       var radlon2 = Math.PI * lon2 / 180
       var theta = lon1 - lon2
       var radtheta = Math.PI * theta / 180
       var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
       dist = Math.acos(dist)
       dist = dist * 180 / Math.PI
       dist = dist * 60 * 1.1515
       if (unit == "K") {
           dist = dist * 1.609344
       }
       if (unit == "N") {
           dist = dist * 0.8684
       }
       return dist
   }

   function generateMap(data, longitude, latitude) {
       map = new GMaps({
           div: '#map',
           lat: latitude,
           lng: longitude,
           zoom: 12,
           scrollwheel: false
       });

       loadResults(data);
       printResults(data);

   }

   function GetLocation(address) {
       var geocoder = new google.maps.Geocoder();
       geocoder.geocode({
           'address': address
       }, function(results, status) {
           if (status == google.maps.GeocoderStatus.OK) {
               $('.o-map-conatiner').show();
               var latitude = results[0].geometry.location.lat();
               var longitude = results[0].geometry.location.lng();
               var data = require("json!../../data/locations.json");

               for (var i = 0; i < data.length; i++) {
                   data[i]["distance"] = calculateDistance(latitude, longitude, data[i].geometry.coordinates[1], data[i].geometry.coordinates[0], "K");
               }

               data.sort(function(a, b) {
                   return a.distance - b.distance;
               });

               generateMap(data, longitude, latitude);
           } else {
               alert("Request failed.")
           }
       });
   };

   function getClientLocation() {

       if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(function(position) {
               $('.o-map-conatiner').show();
               var latitude = position.coords.latitude;
               var longitude = position.coords.longitude;
               var data = require("json!../../data/locations.json");

               for (var i = 0; i < data.length; i++) {
                   data[i]["distance"] = calculateDistance(latitude, longitude, data[i].geometry.coordinates[1], data[i].geometry.coordinates[0], "K");
               }

               data.sort(function(a, b) {
                   return a.distance - b.distance;
               });

               generateMap(data, longitude, latitude);

           });
       } else {
           // Browser doesn't support Geolocation
           alert("not supported")
       }



   }




   $('body').on('click', '.find-store', function(e) {
       e.preventDefault();
       var address = $('#addressEntry').val();
       GetLocation(address);
   });

   $('body').on('click', '.use-location', function(e) {
       e.preventDefault();
       getClientLocation();
   });
   // ===========================
   // Mapbox End
   // ===========================
