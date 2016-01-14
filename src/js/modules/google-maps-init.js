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
                       icon: {
                           size: new google.maps.Size(56, 56),
                           url: icon
                       },
                       infoWindow: {
                           content: '<p>' + item.properties.name + '</p>'
                       }
                   });
               }
           }
       }
       map.addMarkers(markers_data);
   }

   function setActive(el) {
    console.log(el);
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
           link.className = 'pan-to-marker';
           link.setAttribute("data-marker-index", i);
           var wrapper = link.appendChild(document.createElement('div'));
           wrapper.className = 'o-store-locator__listings-wrapper';



           var detailsRow = wrapper.appendChild(document.createElement('div'));
           detailsRow.className = "row o-store-locator__listings-content u-pad-v-small";

           var listing = detailsRow.appendChild(document.createElement('div'));
           listing.className = 'col-12@xs col-6@lg';



           listing.innerHTML = '<div class="o-store-locator__listings-city">' + prop.city + '</div>';
           if (prop.address) {
               listing.innerHTML += '<div class="o-store-locator__listings-distance">Distance from ' + prop.city + ' - 0.4 miles</div>';
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

       position = map.markers[$index].getPosition();

       lat = position.lat();
       lng = position.lng();

       map.setCenter(lat, lng);
       map.setZoom(12);
   });

   $(document).ready(function() {
       // prettyPrint();
       map = new GMaps({
           div: '#map',
           lat: 54.236107,
           lng: -4.548056,
           zoom: 6,
       });

       map.on('marker_added', function(marker) {
           var index = map.markers.indexOf(marker);
           $('#results').append('<li><a href="#" class="pan-to-marker" data-marker-index="' + index + '">' + marker.title + '</a></li>');

           if (index == map.markers.length - 1) {
               map.fitZoom();
           }
       });

       var xhr = require("json!../../data/locations.json");

       loadResults(xhr);
       printResults(xhr);
       // xhr.done(loadResults);
   });
   // ===========================
   // Mapbox End
   // ===========================
