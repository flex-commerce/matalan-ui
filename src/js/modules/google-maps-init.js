   // ===========================
   // Mapbox
   // ===========================
   var GMaps = require('../vendors/gmaps');
   var map;
   var mobilemap;
   var listings = document.getElementById('listings');
   var data = require("json!../../data/locations.json");

   function loadResults(fulldata, longitude, latitude) {
       var items, markers_data = [];
       var icon = '../../img/marker.svg';
       var newicon = '../../img/marker-current.svg';

       if (fulldata.length > 0) {
           items = fulldata;

           for (var i = 0; i < items.length; i++) {

               var item = items[i];
               if (item.geometry.coordinates != undefined) {
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
                           content: '<h4 class="c-info-window__title">' + item.properties.city + '</h4>' + '<div class="c-info-window__title u-color-pri">' + item.distance.toFixed(1) + ' miles away</div>'
                       },
                       click: function(e) {
                           var element = $('[data-marker-index=' + e.id + ']');
                           setActive(element);
                           // $('#store-' + e.id).get(0).scrollIntoView(-60);
                           if (longitude && latitude) {
                               $('.o-store-locator__locations').scrollTo('#store-' + e.id);
                           }


                       }

                   });
               }
           }
       }
       if (longitude && latitude) {
           markers_data.push({
               lat: latitude,
               lng: longitude,
               title: 'Your location',
               icon: {
                   size: new google.maps.Size(56, 56),
                   url: newicon
               },
               infoWindow: {
                   content: '<h4 class="c-info-window__title">Your location</h4>'
               },
           });
           map.addMarkers(markers_data);
       } else {
           mobilemap.addMarkers(markers_data);
       }





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
           if (i === 0) {
               var activeStatus = 'active';
           } else {
               var activeStatus = '';
           }
           link.className = 'pan-to-marker';
           link.setAttribute("data-marker-index", prop.storeid);
           var wrapper = link.appendChild(document.createElement('div'));
           wrapper.className = 'o-store-locator__listings-wrapper ' + activeStatus;



           var detailsRow = wrapper.appendChild(document.createElement('div'));
           detailsRow.className = "row o-store-locator__listings-content u-pad-v-small";

           var listing = detailsRow.appendChild(document.createElement('div'));
           listing.className = 'col-12@xs col-6@lg';



           listing.innerHTML = '<div class="o-store-locator__listings-city">' + prop.city + '</div>';
           if (prop.address) {
               listing.innerHTML += '<div class="o-store-locator__listings-distance">' + locale.distance.toFixed(1) + ' miles away</div>';
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
           opening.className = 'o-store-locator__opening u-mar-t-large';
           opening.innerHTML = "";
           if (prop.hours) {
               opening.innerHTML += prop.hours.replace(/\n/g, '<br />');
           }

           var callButton = listings.appendChild(document.createElement('div'));
           callButton.className = 'o-store-call hidden@md-up u-cf';
           callButton.innerHTML = '<a href="tel:' + prop.phone + '"class="c-btn c-btn-primary col-12@xs u-font-upper u-mar-t-large"><i class="icon icon-telephone u-color-pri u-pad-r-huge icon--vertical-middle"></i>Call store</a>';

           var openMapButton = listings.appendChild(document.createElement('div'));
           openMapButton.className = 'o-store-map-open hidden@md-up u-cf';
           openMapButton.innerHTML = '<a class="c-btn c-btn-primary col-12@xs u-font-upper store-finder__map--mobile-open u-mar-v-large" data-storeId="' + prop.storeid + '"><i class="icon icon-menu-storefinder u-color-pri u-pad-r-huge icon--vertical-middle"></i>View Map</a>';

           var mapmobile = listings.appendChild(document.createElement('div'));
           mapmobile.id = 'map-' + prop.storeid;
           mapmobile.className = 'o-store-map-mobile u-mar-t-large';

           var closeMapButton = listings.appendChild(document.createElement('div'));
           closeMapButton.className = 'o-store-map-close hidden@md-up u-cf';
           closeMapButton.innerHTML = '<a class="c-btn c-btn-primary col-12@xs u-font-upper store-finder__map--mobile-close u-mar-t-large  u-mar-b-huge " data-storeId="' + prop.storeid + '"><i class="icon icon-menu-storefinder u-color-pri u-pad-r-huge icon--vertical-middle"></i>Close Map</a>';

       };

   }




   $('body').on('click', '.pan-to-marker', function(e) {
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

       google.maps.event.trigger(marker, 'click');

       lat = position.lat();
       lng = position.lng();

       map.setCenter(lat, lng);

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

       loadResults(data, longitude, latitude);
       printResults(data);

       $('html, body').animate({
           scrollTop: $('#storeFinderContainer').offset().top
       }, 'slow');
       var firstMarker = map.markers[0];
       firstMarker.infoWindow.open();
       google.maps.event.trigger(firstMarker, 'click');

       var width = ($(window).width() - ($('.o-store-locator').offset().left + $('.o-store-locator').outerWidth()));
       if (width > 0) {
           $('.map-wrapper').css('right', -width);
       }

   }

   if ($('.map-wrapper').length > 0) {
       $(window).resize(function() {
           var width = ($(window).width() - ($('.o-store-locator').offset().left + $('.o-store-locator').outerWidth()));
           if (width > 0) {
               $('.map-wrapper').css('right', -width);
           }
       });
   }

   $('body').on('click', '.store-finder__map--mobile-open', function(e) {
       $('.o-store-map-close.mapActive a').trigger('click');
       $(this).parent().prev().prev('a').trigger('click');
       var storeId = $(this).data('storeid');
       $(this).parent().hide();
       $(this).parent().next().next('.o-store-map-close').show().addClass('mapActive');
       generateMobileMap(storeId);
       $(this).parent().next('.o-store-map-mobile').show();
       var currCenter = mobilemap.map.getCenter();
       google.maps.event.trigger(mobilemap.map, 'resize');
       mobilemap.map.setCenter(currCenter);

   });

   $('body').on('click', '.store-finder__map--mobile-close', function(e) {

       $(this).parent().prev('.o-store-map-mobile').html('').hide();
       $(this).parent().hide();
       $(this).parent().prev().prev('.o-store-map-open').show();

   });

   function generateMobileMap(storeId) {

       var mobileData = [];

       var result = _.find(data, function(o) {
           return o.properties.storeid === storeId;
       });

       mobilemap = new GMaps({
           div: '#map-' + storeId,
           lat: result.geometry.coordinates[1],
           lng: result.geometry.coordinates[0],
           zoom: 16,
           scrollwheel: false
       });
       mobileData.push(result);

       loadResults(mobileData);

       // var firstMarker = map.markers[0];
       // firstMarker.infoWindow.open();
       // google.maps.event.trigger(firstMarker, 'click');

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
