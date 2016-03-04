// ===========================
// Mapbox
// ===========================

var map,
  mobilemap,
  listings = document.getElementById('listings'),
  isModal = false;

// async script loader
// could move this to a utils module
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (callback) script.onload = callback;
  document.getElementsByTagName("head")[0].appendChild(script);
  script.src = src;
}


// step 1, we'll start async loading of google maps
loadScript('https://maps.googleapis.com/maps/api/js?v=3', initialize);

function initialize() {
  // an array as the first require argument will split the requested code into a chunk
  // automatically split from the main app.js as x.y.js, copied to dist and loaded only when needed
  // perfect for occasional external libraries and big json packets :)
  require.ensure(["json!../../js-data/locations.json", 'gmaps'], function() {
    // once we're in this function, the external files have been loaded, we can safely continue
    // we'll wanna investigate fail states for this..

    var data = require("json!../../js-data/locations.json");
    var singleData = require("json!../../js-data/locations-1.json");
    var GMaps = require("gmaps");

    var clickCollectContain = $('#click-and-collect-contain');
    var isModal = false;

    function closeMap() {
      clickCollectContain.modal('hide');
    }

    function openMap() {
      clickCollectContain.modal('show');
    }

    // Calculates the distance from the current location (clientLatitude1, clientLongitude2) to the data location co-ordinates (dataLatitude1, dataLongitude2)
    //
    var calculateDistance = function(clientLatitude1, clientLongitude2, dataLatitude1, dataLongitude2, unit) {
      var radclientLatitude1 = Math.PI * clientLatitude1 / 180;
      var raddataLatitude1 = Math.PI * dataLatitude1 / 180;
      var radclientLongitude2 = Math.PI * clientLongitude2 / 180;
      var raddataLongitude2 = Math.PI * dataLongitude2 / 180;
      var theta = clientLongitude2 - dataLongitude2;
      var radtheta = Math.PI * theta / 180;
      var dist = Math.sin(radclientLatitude1) * Math.sin(raddataLatitude1) + Math.cos(radclientLatitude1) * Math.cos(raddataLatitude1) * Math.cos(radtheta);
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == "K") {
        dist = dist * 1.609344;
      }
      if (unit == "N") {
        dist = dist * 0.8684;
      }
      return dist;
    };

    // Build the main map
    //
    var generateMap = function(data, longitude, latitude, isModal, isSingleStore) {

      if (isSingleStore) {
        map = new GMaps({
          div: '#map',
          lat: latitude,
          lng: longitude,
          zoom: 18,
          draggable: true,
          scrollwheel: false,
          disableDoubleClickZoom: true,
          zoomControl: false,
          disableDefaultUI: true
        });
      } else {
        map = new GMaps({
          div: '#map',
          lat: latitude,
          lng: longitude,
          zoom: 12,
          scrollwheel: false,

        });
      }
      loadResults(data, longitude, latitude, isModal, isSingleStore);


      var width = ($(window).width() - ($('.o-store-locator').offset().left + $('.o-store-locator').outerWidth()));
      if (!isSingleStore) {
        printResults(data, isModal);
        if (!isModal) {

          // document.getElementById('storeFinderContainer').scrollIntoView();
          // scroll map & list into view when loaded
          $('body, html').animate({
            scrollTop: $('#storeFinderContainer').offset().top
          }, 500);

        }
      }

      var firstMarker = map.markers[0];
      // firstMarker.infoWindow.open();
      google.maps.event.trigger(firstMarker, 'click');

      if (width > 0 && !isModal) {
        $('.map-wrapper').css('right', -width);
      } else {
        $('.map-wrapper').css('right', 0);
      }


    };

    // Build the mobile map
    //
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
    };

    function map_recenter(latlng, offsetx, offsety) {
      var point1 = map.getProjection().fromLatLngToPoint(
        (latlng instanceof google.maps.LatLng) ? latlng : map.getCenter()
      );
      var point2 = new google.maps.Point(
        ((typeof(offsetx) == 'number' ? offsetx : 0) / Math.pow(2, map.getZoom())) || 0,
        ((typeof(offsety) == 'number' ? offsety : 0) / Math.pow(2, map.getZoom())) || 0
      );
      map.setCenter(map.getProjection().fromPointToLatLng(new google.maps.Point(
        point1.x - point2.x,
        point1.y + point2.y
      )));
    }

    // GetLocation method used for input field and lookup of address / city / postcode
    //
    var GetLocation = function(address, isModal, isSingleStore) {

      var geocoder = new google.maps.Geocoder();

      geocoder.geocode({ 'address': address }, function(results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
          $('.o-map-container').show();
          var latitude = results[0].geometry.location.lat();
          var longitude = results[0].geometry.location.lng();

          for (var i = 0; i < data.length; i++) {
            data[i].distance = calculateDistance(
              latitude,
              longitude,
              data[i].geometry.coordinates[1],
              data[i].geometry.coordinates[0],
              "K");
          }

          data.sort(function(a, b) {
            return a.distance - b.distance;
          });
          if (isModal) {
            openMap();
          }
          generateMap(data, longitude, latitude, isModal, isSingleStore);

        } else {
          alert("Request failed.");
        }
      });
    };

    // GetLocation method for 'use my location'
    //
    var getClientLocation = function(isModal) {

      // check for support
      if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function(position) {
          $('.o-map-container').show();
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
        alert("not supported");
      }
    };

    var loadResults = function(fulldata, longitude, latitude, isModal, isSingleStore) {
      var markers_data = [];

      var icon = '../../img/marker.svg';
      var mapLocatorIcon = '../../img/marker-current.svg';

      if (fulldata.length > 0) {

        for (var i = 0; i < fulldata.length; i++) {

          var item = fulldata[i];

          if (item.geometry.coordinates !== undefined) {
            if (typeof item.distance == "undefined") {
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
                  content: '<h4 class="c-info-window__title">' + item.properties.city + '</h4>'
                }
              });
            } else {
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
                  content: '<h4 class="c-info-window__title">' + item.properties.city + '</h4>' +
                    '<div class="c-info-window__title u-color-pri">' + item.distance.toFixed(1) +
                    ' miles away</div>'
                },
                click: function(e) {
                  var element = $('[data-marker-index=' + e.id + ']');
                  setActive(element);
                  //
                  if (longitude && latitude) {
                    // $('#store-' + e.id).get(0).scrollIntoView({block: "start", behavior: "smooth"});
                    // $('.o-store-locator__locations').scrollTo('#store-' + e.id);
                    //
                    if (!isModal) {
                      $('.o-store-locator__locations').animate({
                        scrollTop: $('#store-' + e.id).position().top
                      }, 500);
                    }
                  }
                  var locationIcon = $('.js-use-location').find('i').prop('outerHTML');
                  $('.js-use-location').html(locationIcon + 'Use my location').removeClass('c-loading');
                }
              });

            }

          }
        }
      }

      if (!isSingleStore) {
        if (longitude && latitude) {
          markers_data.push({
            lat: latitude,
            lng: longitude,
            title: 'Your location',
            icon: {
              size: new google.maps.Size(56, 56),
              url: mapLocatorIcon
            },
            infoWindow: {
              content: '<h5 class="c-info-window__title">Your location</h5>'
            },
          });
          map.addMarkers(markers_data);
        } else {
          mobilemap.addMarkers(markers_data);
        }
      } else {
        map.addMarkers(markers_data);
      }
    };

    var setActive = function(el) {
      var siblings = listings.getElementsByTagName('div');
      for (var i = 0; i < siblings.length; i++) {
        siblings[i].className = siblings[i].className
          .replace(/active/, '').replace(/\s\s*$/, '');
      }

      el.find('.o-store-locator__listing-wrapper').addClass('active');
    };

    var printResults = function(data, isModal) {
      var activeStatus;
      var actionRow;
      var actionButton;
      var resultsForDisplay = document.createElement('div');

      listings.innerHTML = "";

      for (var i = 0, len = data.length; i < len; i++) {

        var locale = data[i];

        // Shorten locale.properties to just `prop` so we're not
        // writing this long form over and over again.
        var prop = locale.properties;

        // Each marker on the map.
        // var popup = '<h3>' + prop.city + '</h3><div>';
        var link = document.createElement('a');
        link.href = '#';
        link.id = 'store-' + prop.storeid;
        i === 0 ? activeStatus = 'active' : activeStatus = undefined;
        link.className = 'pan-to-marker';
        link.setAttribute("data-marker-index", prop.storeid);

        resultsForDisplay.appendChild(link);


        var wrapper = document.createElement('div');
        wrapper.className = 'o-store-locator__listing-wrapper ' + activeStatus;

        link.appendChild(wrapper);


        var detailsRow = document.createElement('div');
        detailsRow.className = "row o-store-locator__listings__content u-pad-v-small";

        wrapper.appendChild(detailsRow);


        var blockTitle = document.createElement('div');
        blockTitle.className = "col-12@xs col-6@md";
        blockTitle.innerHTML = '<div class="o-store-locator__listings__city">' + prop.city + '</div>';
        detailsRow.appendChild(blockTitle);

        if (prop.address && typeof locale.distance != "undefined") {
          var distanceTitle = document.createElement('div');
          distanceTitle.className = "col-12@xs col-6@md";
          distanceTitle.innerHTML += '<div class="o-store-locator__listings__distance">' + locale.distance.toFixed(1) + ' miles away</div>';
          detailsRow.appendChild(distanceTitle);
        }





        var blockAddress = document.createElement('div');
        blockAddress.className = 'col-12@xs col-6@lg';
        // blockAddress.innerHTML = '<div class="o-store-locator__listings__city">' + prop.city + '</div>';
        if (prop.address) {
          // blockAddress.innerHTML += '<div class="o-store-locator__listings__distance">' + locale.distance.toFixed(1) + ' miles away</div>';
          blockAddress.innerHTML += '<div class="o-store-locator__listings__address u-mar-t-medium">' + prop.address + '</div>';
          blockAddress.innerHTML += '<div class="o-store-locator__listings__postcode">' + prop.postcode + '</div>';
          // popup += '<div class="quiet">' + prop.address + '</div>';
        }
        if (prop.phone) {
          var tel = document.createElement('div');
          tel.className = 'o-store-locator__listings__phone u-mar-t-medium';
          tel.innerHTML = '<a href="tel:' + prop.phone + '">' + prop.phoneFormatted + '</a>';

          blockAddress.appendChild(tel);
        }

        detailsRow.appendChild(blockAddress);



        var blockTimes = document.createElement('div');
        blockTimes.className = "col-12@xs col-6@lg";

        detailsRow.appendChild(blockTimes);


        var opening = document.createElement('div');
        opening.className = 'o-store-locator__opening u-mar-t-medium u-font-small-rel';
        opening.innerHTML = "";
        if (prop.hours) {
          opening.innerHTML += prop.hours.replace(/\n/g, '<br />');
        }

        blockTimes.appendChild(opening);



        if (isModal) {
          actionRow = document.createElement('div');
          actionRow.className = "col-12@xs col-6@lg";

          actionButton = document.createElement('div');
          actionButton.className = 'c-btn c-btn--secondary col-10@xs u-mar-t-medium u-font-upper o-select-store';
          actionButton.setAttribute('data-storeName', prop.city + ' - ' + prop.address);
          actionButton.innerHTML = "Select this store";

          detailsRow.appendChild(actionRow);
          blockTimes.appendChild(actionButton);
        }

        if (!isModal) {
          actionRow = document.createElement('div');
          actionRow.className = "col-12@xs col-6@lg";

          actionButton = document.createElement('div');
          actionButton.className = 'c-btn c-btn--primary--alt col-10@xs hidden@sm-down u-mar-t-medium u-font-upper';
          actionButton.innerHTML = "View on Map";

          actionRow.appendChild(actionButton);
          detailsRow.appendChild(actionRow);
        }

        var callButton = document.createElement('div');
        callButton.className = 'o-store-call hidden@md-up u-cf';
        callButton.innerHTML = '<a href="tel:' + prop.phone + '"class="c-btn c-btn--primary col-12@xs u-font-upper u-mar-t-large"><i class="icon icon-telephone u-color-pri u-pad-r-huge icon--vertical-middle"></i>Call store</a>';

        resultsForDisplay.appendChild(callButton);


        var openMapButton = document.createElement('div');
        openMapButton.className = 'o-store-map-open hidden@md-up u-cf';
        openMapButton.innerHTML = '<a class="c-btn c-btn--primary col-12@xs u-font-upper store-finder__map--mobile-open u-mar-v-large" data-storeId="' + prop.storeid + '"><i class="icon icon-menu-storefinder u-color-pri u-pad-r-huge icon--vertical-middle"></i>View Map</a>';

        resultsForDisplay.appendChild(openMapButton);


        var mapmobile = document.createElement('div');
        mapmobile.id = 'map-' + prop.storeid;
        mapmobile.className = 'o-store-map-mobile u-mar-t-large';

        resultsForDisplay.appendChild(mapmobile);


        var closeMapButton = document.createElement('div');
        closeMapButton.className = 'o-store-map-close hidden@md-up u-cf';
        closeMapButton.innerHTML = '<a class="c-btn c-btn--primary col-12@xs u-font-upper store-finder__map--mobile-close u-mar-t-large u-mar-b-small" data-storeId="' + prop.storeid + '"><i class="icon icon-menu-storefinder u-color-pri u-pad-r-huge icon--vertical-middle"></i>Close Map</a>';
        resultsForDisplay.appendChild(closeMapButton);
        var seperator = document.createElement('div');
        seperator.className = 'separator u-mar-b-medium hidden@md-up';

        resultsForDisplay.appendChild(seperator);
      };

      listings.appendChild(resultsForDisplay);
    };


    // =============================================================

    // stores sidelist, click to select, activate, and focus map marker
    $('body').on('click', '.pan-to-marker', function(e) {
      e.preventDefault();
      setActive($(this));

      var position, $index;
      $index = $(this).data('marker-index');

      var result = $.grep(map.markers, function(e) {
        return e.id == $index;
      });

      var marker = result[0];
      position = marker.position;
      marker.infoWindow.open();
      google.maps.event.trigger(marker, 'click');

      map.setCenter(position.lat(), position.lng());
    });

    // mobile map open
    $('body').on('click', '.store-finder__map--mobile-open', function(e) {

      //  .o-store-map-close.mapActive - does this exist??
      $('.o-store-map-close.mapActive a').trigger('click');
      // console.log($('.o-store-map-close.mapActive a'));
      //  .o-store-map-close.mapActive - does this exist??

      $(this).parent().prev().prev('a').trigger('click');
      // var storeId = $(this).data('storeid');
      $(this).parent().hide();
      $(this).parent().next().next('.o-store-map-close').show().addClass('mapActive');
      generateMobileMap($(this).data('storeid'));
      $(this).parent().next('.o-store-map-mobile').show();
      var currCenter = mobilemap.map.getCenter();
      google.maps.event.trigger(mobilemap.map, 'resize');
      mobilemap.map.setCenter(currCenter);
      // console.warn($('.o-store-map-close.mapActive a'));
      // var y = $(window).scrollTop(); //your current y position on the page
      // $(window).scrollTop(y + 300);
    });

    // mobile map close
    $('body').on('click', '.store-finder__map--mobile-close', function(e) {
      $(this).parent().prev('.o-store-map-mobile').html('').hide();
      $(this).parent().hide();
      $(this).parent().prev().prev('.o-store-map-open').show();
    });

    // find store by postcode
    $('body').on('click', '.js-find-store', function(e) {
      e.preventDefault();
      isModal = true;
      $(this).is("[data-click-collect]") ? isModal = true : isModal = false;
      var address = $('#addressEntry').val();
      GetLocation(address, isModal);
    });

    // find store by current location
    $('body').on('click', '.js-use-location', function(e) {
      e.preventDefault();
      isModal = true;
      var locationIcon = $(this).find('i').prop('outerHTML');
      $(this).html(locationIcon + 'Searching').addClass('c-loading');
      $(this).is("[data-click-collect]") ? isModal = true : isModal = false;
      getClientLocation(isModal);
    });

    // modal method?
    $('body').on('click', '.o-select-store', function() {
      var selectedStore = $(this).attr('data-storeName');
      $('.o-store-finder__actions').hide();
      $('.o-store-finder__selected').show();
      $('.o-store-finder__selected span').text(selectedStore);
      $(".o-submit-button").show();
      closeMap();
    });

    // resize map on window resize, keeps dimensions sweet
    if ($('.map-wrapper').length > 0) {
      $(window).on('resize', _.debounce(function() {
        var width = ($(window).width() - ($('.o-store-locator').offset().left + $('.o-store-locator').outerWidth()));
        if (width > 0 && !isModal) {
          $('.map-wrapper').css('right', -width);
        } else {
          $('.map-wrapper').css('right', 0);
        }
      }));
    }

    if ($('body').hasClass('page--storepage')) {
      generateMap(singleData, '-1.4698', '53.796631', false, true);
      map.panBy(-100, 0);
    };

    // ===========================
    // Mapbox End
    // ===========================
  });



}
