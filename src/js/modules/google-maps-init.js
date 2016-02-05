   // ===========================
   // Mapbox
   // ===========================
   var map,
       mobilemap,
       listings = document.getElementById('listings'),
       latlng;

   // an array as the first require argument will split the requested code into a chunk
   // automatically split from the main app.js as x.y.js, copied to dist and loaded only when needed
   // perfect for occasional external libraries and big json packets :)
   require.ensure(["json!../../data/locations.json", '../vendors/gmaps'], function() {
       // once we're in this function, the external files have been loaded, we can safely continue
       // we'll wanna investigate fail states for this..
       var data = require("json!../../data/locations.json");
       var GMaps = require("../vendors/gmaps");

       console.log(data);
       console.log(GMaps);

       var clickCollectContain = $('#click-and-collect-contain');
       var isModal = false;

       function closeMap() {
           clickCollectContain.modal('hide');
       }

       function openMap() {
           clickCollectContain.modal('show');
       }

       // Calculates the distance from the current location (clientLatitude1, clientLongitude2) to the data location co-ordinates (dataLatitude1, dataLongitude2)
       var calculateDistance = function(clientLatitude1, clientLongitude2, dataLatitude1, dataLongitude2, unit) {
           var radclientLatitude1 = Math.PI * clientLatitude1 / 180
           var raddataLatitude1 = Math.PI * dataLatitude1 / 180
           var radclientLongitude2 = Math.PI * clientLongitude2 / 180
           var raddataLongitude2 = Math.PI * dataLongitude2 / 180
           var theta = clientLongitude2 - dataLongitude2
           var radtheta = Math.PI * theta / 180
           var dist = Math.sin(radclientLatitude1) * Math.sin(raddataLatitude1) + Math.cos(radclientLatitude1) * Math.cos(raddataLatitude1) * Math.cos(radtheta);
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

       // Build the main map
       var generateMap = function(data, longitude, latitude, isModal) {
           console.log(isModal)
           map = new GMaps({
               div: '#map',
               lat: latitude,
               lng: longitude,
               zoom: 12,
               scrollwheel: false
           });

           loadResults(data, longitude, latitude);
           printResults(data, isModal);
           var width = ($(window).width() - ($('.o-store-locator').offset().left + $('.o-store-locator').outerWidth()));

           if (width > 0 && !isModal) {
               console.log
               $('html, body').animate({
                   scrollTop: $('#storeFinderContainer').offset().top
               }, 'slow');
           }
           var firstMarker = map.markers[0];
           firstMarker.infoWindow.open();
           google.maps.event.trigger(firstMarker, 'click');

           var width = ($(window).width() - ($('.o-store-locator').offset().left + $('.o-store-locator').outerWidth()));
           if (width > 0 && !isModal) {
               $('.map-wrapper').css('right', -width);
           }
       }

       var generateMobileMap = function(storeId) {

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

       var GetLocation = function(address, isModal) {
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
                   if (isModal) {
                       openMap();
                   }

                   generateMap(data, longitude, latitude, isModal);
               } else {
                   alert("Request failed.")
               }
           });
       };

       var getClientLocation = function(isModal) {

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
                   if (isModal) {
                       openMap();
                   }

                   generateMap(data, longitude, latitude, isModal);

               });
           } else {
               // Browser doesn't support Geolocation
               alert("not supported")
           }
       }

       var loadResults = function(fulldata, longitude, latitude, isModal) {
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
                               var locattionIcon = $('.use-location').find('i').prop('outerHTML');
                               $('.use-location').html(locattionIcon + 'Use my location').removeClass('c-loading');


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

       var setActive = function(el) {
           var siblings = listings.getElementsByTagName('div');
           for (var i = 0; i < siblings.length; i++) {
               siblings[i].className = siblings[i].className
                   .replace(/active/, '').replace(/\s\s*$/, '');
           }

           el.find('.o-store-locator__listings-wrapper').addClass('active');
       }

       var printResults = function(data, isModal) {

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

               if (isModal) {
                   var actionRow = detailsRow.appendChild(document.createElement('div'));
                   actionRow.className = "col-12@xs col-6@lg";
                   var actionButton = details.appendChild(document.createElement('div'));
                   actionButton.className = 'c-btn c-btn-secondary col-10@xs u-mar-t-medium u-font-upper o-select-store';
                   actionButton.setAttribute('data-storeName', prop.city + ' - ' + prop.address);
                   actionButton.innerHTML = "Select this store";
               }

               if (!isModal) {
                   var actionRow = detailsRow.appendChild(document.createElement('div'));
                   actionRow.className = "col-12@xs col-6@lg";
                   var actionButton = details.appendChild(document.createElement('div'));
                   actionButton.className = 'c-btn c-btn-primary col-10@xs u-mar-t-medium u-font-upper';
                   actionButton.innerHTML = "View on Map";
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
           var y = $(window).scrollTop(); //your current y position on the page
           $(window).scrollTop(y + 300);

       });

       $('body').on('click', '.store-finder__map--mobile-close', function(e) {

           $(this).parent().prev('.o-store-map-mobile').html('').hide();
           $(this).parent().hide();
           $(this).parent().prev().prev('.o-store-map-open').show();

       });

       $('body').on('click', '.find-store', function(e) {
           e.preventDefault();
           isModal = false;
           if ($(this).data('click-collect') === 'click-collect') {
               isModal = true;
           }
           var address = $('#addressEntry').val();

           GetLocation(address, isModal);

       });

       $('body').on('click', '.use-location', function(e) {
           e.preventDefault();
           var locattionIcon = $(this).find('i').prop('outerHTML');
           $(this).html(locattionIcon + 'Searching').addClass('c-loading');
           isModal = false;
           if ($(this).data('click-collect') === 'click-collect') {
               isModal = true;
           }
           getClientLocation(isModal);
       });

       if ($('.map-wrapper').length > 0) {
           $(window).resize(function() {
               var width = ($(window).width() - ($('.o-store-locator').offset().left + $('.o-store-locator').outerWidth()));
               if (width > 0 && !isModal) {
                   $('.map-wrapper').css('right', -width);
               }
           });
       }

       $('body').on('click', '.o-select-store', function() {
           var selectedStore = $(this).attr('data-storeName');
           $('.o-store-finder__actions').hide();
           $('.o-store-finder__selected').show();

           $('.o-store-finder__selected span').text(selectedStore);
           $(".o-submit-button").show();
           closeMap();

       });
       // ===========================
       // Mapbox End
       // ===========================
   });
