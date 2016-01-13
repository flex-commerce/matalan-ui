// ===========================
// Lodash
// ===========================
require("lodash");
// ===========================
// Lodash end
// ===========================


window.isMobileOrTablet = window.matchMedia("only screen and (max-width: 1025px)");

$(document).ready(function() {
    $(window).on('resize', _.debounce(function() {
        window.isMobileOrTablet = window.matchMedia("only screen and (max-width: 1025px)");
    }, 250));
});

// console.log('isMobileOrTablet', window.isMobileOrTablet.matches) // true | false

// $(window).on('resize', _.debounce(function() {
//   console.log('isMobileOrTablet', window.isMobileOrTablet.matches) // true | false
// }));



// ===========================
// Common JS functions
// ===========================
require("./modules/general");
// ===========================
// Common JS end
// ===========================


// ===========================
// Dropdown load - no init required
// ===========================
require("./modules/dropdown");
// ===========================
// Dropdown end
// ===========================

// ===========================
// Mapbox
// ===========================
require('./vendors/mapbox');
$('body').on('click', '.find-store', function() {
    $('.o-map-conatiner').show();
    L.mapbox.accessToken = 'pk.eyJ1IjoiYW5keWpvbmVzIiwiYSI6ImNpajRkdjU1bDAwMWF2cW0zNXJ0cWJqNzMifQ.tZSGgAMou1DiYN3TUK3yEQ';

    var json = require('../data/locations.json');
    console.dir(json);
    var geojson = [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.086126, 57.152372]
        },
        "properties": {
            "StoreId": "53",
            "name": "Aberdeen",
            "address": "Matalan - Constitution Street\n\n",
            "city": "Aberdeen",
            "CountryCode": "GB",
            "postcode": "AB24 5ET",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 18.00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Retail",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-4.081494, 52.412431]
        },
        "properties": {
            "StoreId": "195",
            "name": "Aberystwyth",
            "address": "Matalan - Units 1 2 3\nPark Avenue\n",
            "city": "Aberystwyth",
            "CountryCode": "GB",
            "postcode": "SY23 1PG",
            "Email": "",
            "hours": "Monday -  Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Wales"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.375753, 53.755319]
        },
        "properties": {
            "StoreId": "59",
            "name": "Accrington",
            "address": "Matalan - Fountain Retail Park\nHyndburn Road\n",
            "city": "Accrington",
            "CountryCode": "GB",
            "postcode": "BB5 4AA",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.298638, 53.402434]
        },
        "properties": {
            "StoreId": "63",
            "name": "Altrincham",
            "address": "Matalan - Brookway Retail park\n452 Altrincham Rd\n",
            "city": "Altrincham",
            "CountryCode": "GB",
            "postcode": "M23 9BL",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19.00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0.849053, 51.146247]
        },
        "properties": {
            "StoreId": "93",
            "name": "Ashford",
            "address": "Matalan - Brookfield Rd\nBeaver Lane\n",
            "city": "Ashford",
            "CountryCode": "GB",
            "postcode": "TN23 4YW",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-4.628407, 55.457212]
        },
        "properties": {
            "StoreId": "177",
            "name": "Ayr",
            "address": "Matalan - Unit 1\nBeresford Terrace\n",
            "city": "Ayr",
            "CountryCode": "GB",
            "postcode": "KA7 2HH",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:00 - 19:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Retail",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.331753, 52.060789]
        },
        "properties": {
            "StoreId": "165",
            "name": "Banbury",
            "address": "Matalan - Cherwell Street\n\n",
            "city": "Banbury",
            "CountryCode": "GB",
            "postcode": "OX16 2BB",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 18:00\nThursday - Friday: 09:00 - 19:00 \nSaturday: 09:00 - 18:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Retail",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-4.142266, 53.216723]
        },
        "properties": {
            "StoreId": "147",
            "name": "Bangor",
            "address": "Matalan - St Davids Retail Park\nCaernarfon Road\n",
            "city": "Bangor",
            "CountryCode": "GB",
            "postcode": "LL57 4TJ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 18:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Wales"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.2363109, 54.1210207]
        },
        "properties": {
            "StoreId": "20",
            "name": "Barrow",
            "address": "Matalan - Walney Road\nBarrow\n",
            "city": "Barrow-in-Furness",
            "CountryCode": "GB",
            "postcode": "LA14 5UN",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 18:00\nSunday: 10:30 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0.503541, 51.591314]
        },
        "properties": {
            "StoreId": "119",
            "name": "Basildon",
            "address": "Matalan - Cricketers Retail Park\nCricketers Way\n",
            "city": "Basildon",
            "CountryCode": "GB",
            "postcode": "SS13 1SA",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 18:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.061402, 51.284091]
        },
        "properties": {
            "StoreId": "194",
            "name": "Basingstoke",
            "address": "Matalan - Chineham Shopping Centre\nChineham\n",
            "city": "Basingstoke",
            "CountryCode": "GB",
            "postcode": "RG24 8BQ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 18:00\nSunday: 10:30- 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0.062209, 51.517806]
        },
        "properties": {
            "StoreId": "69",
            "name": "Beckton",
            "address": "Matalan - Unit 8 Becton Retail Park\nAlpine Way\n",
            "city": "Beckton",
            "CountryCode": "GB",
            "postcode": "E6 6LA",
            "Email": "",
            "hours": "Monday - Friday: 10:00 - 20:00\nSaturday: 09:00 - 20.00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "London"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.486761, 52.107991]
        },
        "properties": {
            "StoreId": "33",
            "name": "Bedford",
            "address": "Matalan - Unit C Interchange Ret Pk\nAmpthill Road\nKempson",
            "city": "Bedford",
            "CountryCode": "GB",
            "postcode": "MK42 7AZ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.254608, 52.084599]
        },
        "properties": {
            "StoreId": "95",
            "name": "Biggleswade",
            "address": "Matalan - A1 Retail Park\nLondon Road\n",
            "city": "Biggleswade",
            "CountryCode": "GB",
            "postcode": "SG18 8NE",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Retail, Boutique",
            "Categorynames": "",
            "Region": "East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.08769, 52.56046]
        },
        "properties": {
            "StoreId": "120",
            "name": "Bilston",
            "address": "Matalan - Spring Vale Retail Park\n\n",
            "city": "Bilston",
            "CountryCode": "GB",
            "postcode": "WV14 0QL",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.016385, 53.386413]
        },
        "properties": {
            "StoreId": "102",
            "name": "Birkenhead",
            "address": "Matalan - Units 3 The Rock Ret Pk\nGreen Lane\n",
            "city": "Birkenhead",
            "CountryCode": "GB",
            "postcode": "CH41 9DF",
            "Email": "",
            "hours": "Monday -  Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.89169, 52.491834]
        },
        "properties": {
            "StoreId": "114",
            "name": "Birmingham",
            "address": "Matalan - Dartmouth Circus\nMiddle Way\n",
            "city": "Birmingham",
            "CountryCode": "GB",
            "postcode": "B6 4LD",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-4.207274, 55.921858]
        },
        "properties": {
            "StoreId": "205",
            "name": "Bishopbriggs",
            "address": "Matalan - Unit 4\nStrathkelvin Retail Park\n",
            "city": "Glasgow",
            "CountryCode": "GB",
            "postcode": "G64 2TS",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 09:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.479791, 53.743835]
        },
        "properties": {
            "StoreId": "127",
            "name": "Blackburn",
            "address": "Matalan - Lower Audley Street\n\n",
            "city": "Blackburn",
            "CountryCode": "GB",
            "postcode": "BB1 1DG",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.990523, 53.794545]
        },
        "properties": {
            "StoreId": "27",
            "name": "Blackpool",
            "address": "Matalan - Clifton Retail Park\nSandhams Way\n",
            "city": "Blackpool",
            "CountryCode": "GB",
            "postcode": "FY4 4UJ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 21:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-4.402478, 55.881206]
        },
        "properties": {
            "StoreId": "207",
            "name": "Blythswood (Clearance)",
            "address": "Matalan - Blythswood Retail Park\nRenfrew\n",
            "city": "Blythswood",
            "CountryCode": "GB",
            "postcode": "PA4 9EN",
            "Email": "",
            "hours": "Monday - Saturday: 09:00 - 18:00 \nSunday: 11:00 - 17:00 ",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Clearance",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.668445, 50.803098]
        },
        "properties": {
            "StoreId": "175",
            "name": "Bognor Regis",
            "address": "Matalan - Unit 1Bognor Regis Ret Pk\nShripney Rd\n",
            "city": "Bognor Regis",
            "CountryCode": "GB",
            "postcode": "PO22 9TR",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 18:00\nSunday: 10.00 - 16:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.415651, 53.585419]
        },
        "properties": {
            "StoreId": "32",
            "name": "Bolton",
            "address": "Matalan - Tonge Moor Road\n\n",
            "city": "Bolton",
            "CountryCode": "GB",
            "postcode": "BL2 2DJ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.01946, 52.977648]
        },
        "properties": {
            "StoreId": "58",
            "name": "Boston",
            "address": "Matalan - John Adams Way\n\n",
            "city": "Boston",
            "CountryCode": "GB",
            "postcode": "PE21 6TY",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-5.966683, 54.579214]
        },
        "properties": {
            "StoreId": "164",
            "name": "Boucher Road",
            "address": "Matalan - 49-51 Boucher Retail Park\nBoucher Crescent\n",
            "city": "Belfast",
            "CountryCode": "GB",
            "postcode": "BT12 6HU",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 21:00\nSaturday: 09:00 - 19:00\nSunday: 12:30 - 18:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Northern Ireland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.711984, 53.83059]
        },
        "properties": {
            "StoreId": "166",
            "name": "Bradford Greengates",
            "address": "Matalan - 760 Harrogate Road\nGreengates\n",
            "city": "Bradford",
            "CountryCode": "GB",
            "postcode": "BD10 0QS",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Yorkshire and the Humber"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.759678, 53.771049]
        },
        "properties": {
            "StoreId": "167",
            "name": "Bradford Mayo",
            "address": "Matalan - Mayo Avenue\n\n",
            "city": "Bradford",
            "CountryCode": "GB",
            "postcode": "BD5 8HP",
            "Email": "",
            "hours": "Monday -  Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Yorkshire and the Humber"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.992941, 51.138518]
        },
        "properties": {
            "StoreId": "200",
            "name": "Bridgwater",
            "address": "Matalan - Bristol Road\nBridgwater\n",
            "city": "Somerset",
            "CountryCode": "GB",
            "postcode": "TA6 4BH",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.129068, 50.866357]
        },
        "properties": {
            "StoreId": "65",
            "name": "Brighton",
            "address": "Matalan - Unit Carden Avenue\nHollingbury\n",
            "city": "Brighton",
            "CountryCode": "GB",
            "postcode": "BN1 8NA",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.544644, 51.429871]
        },
        "properties": {
            "StoreId": "132",
            "name": "Bristol Brislington",
            "address": "Matalan - Unit 1 Brislington Ret Pk\nBath Road\n",
            "city": "Brislington",
            "CountryCode": "GB",
            "postcode": "BS4 5NG",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.559218, 51.50628]
        },
        "properties": {
            "StoreId": "49",
            "name": "Bristol Filton",
            "address": "Matalan - Unit 1 Abbey Ret Pk\nStation Road\n",
            "city": "Bristol Filton",
            "CountryCode": "GB",
            "postcode": "BS34 7JL",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.977453, 53.333986]
        },
        "properties": {
            "StoreId": "12",
            "name": "Bromborough",
            "address": "Matalan - Bromborough Village Road\nNew Chester Road\n",
            "city": "Bromborough",
            "CountryCode": "GB",
            "postcode": "CH62 7ES",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.631659, 52.805777]
        },
        "properties": {
            "StoreId": "163",
            "name": "Burton Relocate",
            "address": "Matalan - Middleway Park\nGulild Street\n",
            "city": "Burton",
            "CountryCode": "GB",
            "postcode": "DE14 1NA",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.289462, 53.592784]
        },
        "properties": {
            "StoreId": "94",
            "name": "Bury",
            "address": "Matalan - Foundry Street\nGeorge Street\n",
            "city": "Bury",
            "CountryCode": "GB",
            "postcode": "BL9 7AZ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 20:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0.747715, 52.241167]
        },
        "properties": {
            "StoreId": "70",
            "name": "Bury St.Edmunds",
            "address": "Matalan - Easlea Road\n\n",
            "city": "Bury St.Edmunds",
            "CountryCode": "GB",
            "postcode": "IP32 7BY",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 20:00\nSunday: 10:00 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.749188, 51.318222]
        },
        "properties": {
            "StoreId": "217",
            "name": "Camberley",
            "address": "Matalan - Park Farm Ind Est\nFrimley Road\n",
            "city": "Camberley",
            "CountryCode": "GB",
            "postcode": "GU16 7PN",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [1.105642, 51.292686]
        },
        "properties": {
            "StoreId": "125",
            "name": "Canterbury",
            "address": "Matalan - Stour Retail Park\nStour Road\n",
            "city": "Canterbury",
            "CountryCode": "GB",
            "postcode": "CT1 1AD",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:00 - 16:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.139477, 51.499384]
        },
        "properties": {
            "StoreId": "25",
            "name": "Cardiff",
            "address": "Matalan - The Avenue Retail Park\nUnit 2  383-384 Newport Road\n",
            "city": "Cardiff",
            "CountryCode": "GB",
            "postcode": "CF23 9AE",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Wales"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.177103, 51.482367]
        },
        "properties": {
            "StoreId": "225",
            "name": "Cardiff city Centre",
            "address": "Matalan - 43-45 Queen Street\nSouth Glamorgan",
            "city": "Cardiff",
            "CountryCode": "GB",
            "postcode": "CF10 2AS",
            "Email": "",
            "hours": "Monday -  Friday: 08:00 - 20:00 \nSaturday: 08:00 - 20:00\nSunday: 11:00 - 17:00",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Retail, Boutique",
            "Categorynames": "",
            "Region": "Wales"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.934726, 54.889235]
        },
        "properties": {
            "StoreId": "96",
            "name": "Carlisle",
            "address": "Matalan - Station Business Ret Pk\nWater Street\n",
            "city": "Carlisle",
            "CountryCode": "GB",
            "postcode": "CA2 5AF",
            "Email": "",
            "hours": "Monday - Friday: 08:00 - 20:00\nSaturday: 08:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-4.308806, 51.848999]
        },
        "properties": {
            "StoreId": "174",
            "name": "Carmarthen",
            "address": "Matalan - Unit 1 Pensarn Ret Pk\nStephens Way\n",
            "city": "Carmarthen",
            "CountryCode": "GB",
            "postcode": "SA31 2BG",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:00 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Wales"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.238087, 53.498796]
        },
        "properties": {
            "StoreId": "197",
            "name": "Cheetham Hill",
            "address": "Matalan - Cheetham Hill Retail Park\nCheetham Hill Road\nCheetham Hill",
            "city": "Manchester",
            "CountryCode": "GB",
            "postcode": "M8 8BB",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 18:00\nSunday: 10:30 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0.47933, 51.738168]
        },
        "properties": {
            "StoreId": "15",
            "name": "Chelmsford",
            "address": "Matalan - Unit 4 Riverside Ret Pk\nVictoria Road\n",
            "city": "Chelmsford",
            "CountryCode": "GB",
            "postcode": "CM1 1AN",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 18:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.077023, 51.905239]
        },
        "properties": {
            "StoreId": "117",
            "name": "Cheltenham",
            "address": "Matalan - 27 Swindon Road\n\n",
            "city": "Cheltenham",
            "CountryCode": "GB",
            "postcode": "GL50 4DF",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 18:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.907006, 53.196689]
        },
        "properties": {
            "StoreId": "100",
            "name": "Chester",
            "address": "Matalan - Stadium Way\nChester\n",
            "city": "Chester",
            "CountryCode": "GB",
            "postcode": "CH1 4PZ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 18:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.438462, 53.235689]
        },
        "properties": {
            "StoreId": "204",
            "name": "Chesterfield",
            "address": "Matalan - Chatsworth Road\n\n",
            "city": "Chesterfield",
            "CountryCode": "GB",
            "postcode": "S40 2AQ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-4.394516, 55.903553]
        },
        "properties": {
            "StoreId": "55",
            "name": "Clydebank",
            "address": "Matalan - 77 Livingstone St\n\n",
            "city": "Clydebank",
            "CountryCode": "GB",
            "postcode": "G81 2XA",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 09:00 - 19.00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-4.022326, 55.857817]
        },
        "properties": {
            "StoreId": "108",
            "name": "Coatbridge",
            "address": "Matalan - Unit 2 Faraday Ret Pk\nWhifflet St/Coatbridge St\n",
            "city": "Coatbridge",
            "CountryCode": "GB",
            "postcode": "ML5 3SQ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 09:00 - 19.00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0.891759, 51.892658]
        },
        "properties": {
            "StoreId": "66",
            "name": "Colchester",
            "address": "Matalan - Unit D-E Sheephen Rl Pk\nSheepen Road\n",
            "city": "Colchester",
            "CountryCode": "GB",
            "postcode": "CO3 3GT",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.256290436, 51.59008275]
        },
        "properties": {
            "StoreId": "198",
            "name": "Colindale",
            "address": "Matalan - Collindale Retail Park\nEdgware Road\n",
            "city": "Colindale",
            "CountryCode": "GB",
            "postcode": "NW9 6TD",
            "Email": "",
            "hours": "Monday - Friday: 10:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "London"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.168774, 53.860128]
        },
        "properties": {
            "StoreId": "92",
            "name": "Colne",
            "address": "Matalan - North Valley Retail Park\nNorth Valley Road\n",
            "city": "Colne",
            "CountryCode": "GB",
            "postcode": "BB8 9HH",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.835897, 54.848885]
        },
        "properties": {
            "StoreId": "170",
            "name": "Consett",
            "address": "Matalan - Hermiston Retail Park\n\n",
            "city": "Consett",
            "CountryCode": "GB",
            "postcode": "DH8 5SB",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 08:30 - 20:00\nSunday: 10:00 - 16:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.682204, 52.495417]
        },
        "properties": {
            "StoreId": "22",
            "name": "Corby",
            "address": "Matalan - Unit 1 Pheonix Ret Pk\nPhoenix Park Way\n",
            "city": "Corby",
            "CountryCode": "GB",
            "postcode": "NN17 5DT",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 20:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.388469, 53.507116]
        },
        "properties": {
            "StoreId": "162",
            "name": "Cortonwood",
            "address": "Matalan - Unit 5 Cortonwood Ret Pk\nBrampton\n",
            "city": "Barnsley",
            "CountryCode": "GB",
            "postcode": "S73 0UF",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 21:00\nSaturday: 09:00 - 20:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Yorkshire and the Humber"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.492102146, 52.43080537]
        },
        "properties": {
            "StoreId": "47",
            "name": "Coventry North",
            "address": "Matalan - Gallagher Ret Pk\nStoney Stanton Road\n",
            "city": "Coventry",
            "CountryCode": "GB",
            "postcode": "CV6 5QQ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19.00\nSunday: 10:30 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.481319, 52.392268]
        },
        "properties": {
            "StoreId": "97",
            "name": "Coventry South",
            "address": "Matalan - Wheler Road\nSeven Stars Trading Estate\n",
            "city": "Coventry",
            "CountryCode": "GB",
            "postcode": "CV3 4LA",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-6.393139, 54.451843]
        },
        "properties": {
            "StoreId": "160",
            "name": "Craigavon",
            "address": "Matalan - Rushmere Retail Park\nCentral Way\n",
            "city": "Craigavon",
            "CountryCode": "GB",
            "postcode": "BT64 1AA",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 21:00\nSaturday: 09:00 - 19:00\nSunday: 12:30 - 18:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Northern Ireland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.18964, 51.12196]
        },
        "properties": {
            "StoreId": "213",
            "name": "Crawley",
            "address": "Matalan - Unit 1a\nLondon Rd Retail Park\n",
            "city": "Crawley",
            "CountryCode": "GB",
            "postcode": "RH10 8JD",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 16:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.219932, 51.560802]
        },
        "properties": {
            "StoreId": "35",
            "name": "Cricklewood",
            "address": "Matalan - Edgware Road\nCricklewood Broadway\n",
            "city": "Cricklewood",
            "CountryCode": "GB",
            "postcode": "NW2 6PH",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 20:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "London"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.121023, 51.383201]
        },
        "properties": {
            "StoreId": "189",
            "name": "Croydon",
            "address": "Matalan - 66 Purley Way\nWest Croydon\n",
            "city": "Croydon",
            "CountryCode": "GB",
            "postcode": "CR0 3JP",
            "Email": "",
            "hours": "Monday - Friday: 10:00 - 20:00\nSaturday: 09:00 - 20:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "London"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.023876, 51.652297]
        },
        "properties": {
            "StoreId": "176",
            "name": "Cwmbran",
            "address": "Matalan - Unit 1\nLlewelyn Walk\n",
            "city": "Cwmbran",
            "CountryCode": "GB",
            "postcode": "NP44 1YN",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 18:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Wales"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.075516, 51.547746]
        },
        "properties": {
            "StoreId": "186",
            "name": "Dalston",
            "address": "Matalan - Kingsland Shopping Centre\n\n",
            "city": "Dalston",
            "CountryCode": "GB",
            "postcode": "E8 2LX",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 19:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "London"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.543935, 54.519956]
        },
        "properties": {
            "StoreId": "143",
            "name": "Darlington",
            "address": "Matalan - Neasham Retail Centre\nNeasham Road\n",
            "city": "Darlington",
            "CountryCode": "GB",
            "postcode": "Dl1 4PF",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 08:30 - 20:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-4.353642, 55.811211]
        },
        "properties": {
            "StoreId": "54",
            "name": "Darnley",
            "address": "Matalan - 589 Nitshill Road\nDarnley\n",
            "city": "Glasgow",
            "CountryCode": "GB",
            "postcode": "G53 7RZ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 18:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0.215464, 51.44742]
        },
        "properties": {
            "StoreId": "172",
            "name": "Dartford",
            "address": "Matalan - Unit 6   10 Prospect Plc\n\n",
            "city": "Dartford",
            "CountryCode": "GB",
            "postcode": "DA1 1DY",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 16:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.472463, 52.91722]
        },
        "properties": {
            "StoreId": "87",
            "name": "Derby",
            "address": "Matalan - Bradshaw Retail Park\nBradshaw Way\n",
            "city": "Derby",
            "CountryCode": "GB",
            "postcode": "DE1 2QB",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.626175, 53.690305]
        },
        "properties": {
            "StoreId": "113",
            "name": "Dewsbury",
            "address": "Matalan - The Rishworth Centre\nRailway Street\n",
            "city": "Dewsbury",
            "CountryCode": "GB",
            "postcode": "WF12 8EQ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Yorkshire and the Humber"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.103896, 53.541985]
        },
        "properties": {
            "StoreId": "121",
            "name": "Doncaster",
            "address": "Matalan - Wheatley Retail Park\nWheatley Hall Road\n",
            "city": "Doncaster",
            "CountryCode": "GB",
            "postcode": "DN2 4PE",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Yorkshire and the Humber"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.584752, 55.074164]
        },
        "properties": {
            "StoreId": "142",
            "name": "Dumfries",
            "address": "Matalan - Unit 1\nThe Peel Centre\n",
            "city": "Dumfries",
            "CountryCode": "GB",
            "postcode": "DG1 3PF",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 08:30 - 18:00\nSunday: 10:00 - 18.00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.960681, 56.464013]
        },
        "properties": {
            "StoreId": "155",
            "name": "Dundee",
            "address": "Matalan - Unit 1 Gallagher Ret Pk\n32 East Dock St\n",
            "city": "Dundee",
            "CountryCode": "GB",
            "postcode": "DD1 3JS",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 18:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.456822, 56.072954]
        },
        "properties": {
            "StoreId": "206",
            "name": "Dunfermline",
            "address": "Matalan - Unit 2/3\nCarnegie Drive\n",
            "city": "Dunfermline",
            "CountryCode": "GB",
            "postcode": "KY12 7AU",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 19:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 18:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.541177, 54.776328]
        },
        "properties": {
            "StoreId": "180",
            "name": "Durham",
            "address": "Matalan - Dragonville Lane\nBelmont\n",
            "city": "Durham",
            "CountryCode": "GB",
            "postcode": "DH1 2WP",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 20:00\nSunday: 10:00 - 16:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0.32361, 50.794996]
        },
        "properties": {
            "StoreId": "45",
            "name": "Eastbourne",
            "address": "Matalan - Unit 4The Crumbles Ret Pk\nPevensey Bay Road\n",
            "city": "Eastbourne",
            "CountryCode": "GB",
            "postcode": "BN23 6JH",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 16:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.367975, 50.972823]
        },
        "properties": {
            "StoreId": "74",
            "name": "Eastleigh",
            "address": "Matalan - Unit 4 Channon Ret Pk\nWoodside Avenue\n",
            "city": "Eastleigh",
            "CountryCode": "GB",
            "postcode": "SO50 9NA",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.135061, 55.967273]
        },
        "properties": {
            "StoreId": "14",
            "name": "Edinburgh Leith",
            "address": "Matalan - Seafield Way\nSeafield Road\n",
            "city": "Edinburgh",
            "CountryCode": "GB",
            "postcode": "EH15 1TB",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 18:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.236225, 55.931617]
        },
        "properties": {
            "StoreId": "46",
            "name": "Edinburgh Slateford",
            "address": "Matalan - 155 Slateford Road\n\n",
            "city": "Edinburgh",
            "CountryCode": "GB",
            "postcode": "EH14 1NZ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 18:00\nSunday: 10:00 - 18:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.168751, 55.886662]
        },
        "properties": {
            "StoreId": "224",
            "name": "Edinburgh Straiton",
            "address": "Matalan -Straiton Retail Park",
            "city": "Edinburgh",
            "CountryCode": "GB",
            "postcode": "EH20 9QY",
            "Email": "",
            "hours": "Monday -  Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday 10:00 - 18:00",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Retail, Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.05683, 51.625063]
        },
        "properties": {
            "StoreId": "235",
            "name": "Edmonton",
            "address": "Edmonton Metro\n34-44 North Mall\nLower Edmonton",
            "city": "Edmonton",
            "CountryCode": "GB",
            "postcode": "N9 0EJ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 19:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17.00",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Retail",
            "Categorynames": "",
            "Region": "London"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.315604, 57.63994]
        },
        "properties": {
            "StoreId": "199",
            "name": "Elgin",
            "address": "Matalan - Edgar Road Retail Park\nEdgar Road\n",
            "city": "Elgin",
            "CountryCode": "GB",
            "postcode": "IV30 6YQ",
            "Email": "",
            "hours": "Monday - Wednesday: 09:00 - 19:00\nThursday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 18:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.028818, 51.654783]
        },
        "properties": {
            "StoreId": "131",
            "name": "Enfield",
            "address": "Matalan - The Brand Centre\nMollison Avenue\n",
            "city": "Enfield",
            "CountryCode": "GB",
            "postcode": "EN3 7NJ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 20:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "London"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0.181832, 51.480534]
        },
        "properties": {
            "StoreId": "184",
            "name": "Erith",
            "address": "Matalan - 3 Pier Road\n\n",
            "city": "Erith",
            "CountryCode": "GB",
            "postcode": "DA8 1RG",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 19:00\nSaturday: 09:00 - 18:00\nSunday: 10:00 - 16:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.535955, 50.709603]
        },
        "properties": {
            "StoreId": "221",
            "name": "Exeter",
            "address": "Matalan - Unit 7\nExeter Retail Park\nMarsh Barton Road",
            "city": "Exeter",
            "CountryCode": "GB",
            "postcode": "EX2 8LH",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16.30",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Retail",
            "Categorynames": "",
            "Region": "South West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.53174, 50.7151]
        },
        "properties": {
            "StoreId": "226",
            "name": "Exeter Clearance",
            "address": "Haven Banks\nWater Lane\n",
            "city": "Exeter",
            "CountryCode": "GB",
            "postcode": "EX2 8BY",
            "Email": "",
            "hours": "Monday - Saturday: 09:00 - 18:00\nSunday: 10:30 - 16:30",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Clearance",
            "Categorynames": "",
            "Region": "South West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.790819, 56.015431]
        },
        "properties": {
            "StoreId": "71",
            "name": "Falkirk",
            "address": "Matalan - Carron Road\n\nFalkirk\n",
            "city": "Falkirk",
            "CountryCode": "GB",
            "postcode": "FK2 7RR",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 18:30\nSunday: 10:00 - 18:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.409874, 51.446193]
        },
        "properties": {
            "StoreId": "190",
            "name": "Feltham",
            "address": "Matalan - Unit 1\nThe Centre\n",
            "city": "Feltham",
            "CountryCode": "GB",
            "postcode": "TW13 4AU",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 19:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "London"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.82012, 55.622399]
        },
        "properties": {
            "StoreId": "159",
            "name": "Galashiels",
            "address": "Matalan - Comely Bank Mill Ret Pk\n\n",
            "city": "Galashiels",
            "CountryCode": "GB",
            "postcode": "TD1 1PY",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 08:30 - 19:00\nSunday: 10:00 - 19:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.600026, 54.958387]
        },
        "properties": {
            "StoreId": "124",
            "name": "Gateshead Central",
            "address": "Matalan - 137 High Street\n\n",
            "city": "Gateshead",
            "CountryCode": "GB",
            "postcode": "NE8 1EJ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 18:00\nSaturday: 08:30 - 18:30\nSunday: 10:00 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-4.2572, 55.85736]
        },
        "properties": {
            "StoreId": "193",
            "name": "Glasgow city",
            "address": "Matalan - Jamaica St\nGlasgow city\n",
            "city": "Glasgow",
            "CountryCode": "GB",
            "postcode": "G1 4NN",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 18:00 (Thursday - 20:00)\nSaturday: 09:00 - 18:00\nSunday: 10:00 - 18:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-4.257051, 55.856988]
        },
        "properties": {
            "StoreId": "234",
            "name": "Glasgow London Road",
            "address": "Matalan - 2121 London Road\nGlasgow",
            "city": "Glasgow",
            "CountryCode": "GB",
            "postcode": "G32 8XQ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 09:00 - 19:00",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Retail",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.186776, 56.188026]
        },
        "properties": {
            "StoreId": "123",
            "name": "Glenrothes",
            "address": "Matalan - Saltire Retail Park\nPentland Park\n",
            "city": "Glenrothes",
            "CountryCode": "GB",
            "postcode": "KY6 2AJ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 18:00\nSunday: 10:00 - 18:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.274998, 51.826918]
        },
        "properties": {
            "StoreId": "106",
            "name": "Gloucester",
            "address": "Matalan - Unit 2 The Olympus Centre\nQuedgeley\n",
            "city": "Gloucester",
            "CountryCode": "GB",
            "postcode": "GL2 4NF",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.648715, 52.910547]
        },
        "properties": {
            "StoreId": "191",
            "name": "Grantham",
            "address": "Matalan - Dysart Retail Park\nDysart Rd\n",
            "city": "Grantham",
            "CountryCode": "GB",
            "postcode": "NG31 7NP",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19.00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [1.721183, 52.605886]
        },
        "properties": {
            "StoreId": "40",
            "name": "Great Yarmouth",
            "address": "Matalan - Southtown Road\n\n",
            "city": "Great Yarmouth",
            "CountryCode": "GB",
            "postcode": "NR31 0JB",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.084552, 53.571172]
        },
        "properties": {
            "StoreId": "148",
            "name": "Grimsby",
            "address": "Matalan - Alexandra Retail Park\nCorporation Road\n",
            "city": "Grimsby",
            "CountryCode": "GB",
            "postcode": "DN31 1SG",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00 \nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Yorkshire and the Humber"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.852792, 53.72316]
        },
        "properties": {
            "StoreId": "141",
            "name": "Halifax",
            "address": "Matalan - Berry Lane\n\n",
            "city": "Halifax",
            "CountryCode": "GB",
            "postcode": "HX1 1RD",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Yorkshire and the Humber"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0.092348, 51.766256]
        },
        "properties": {
            "StoreId": "154",
            "name": "Harlow",
            "address": "Matalan - 15-18 The Water Gardens\nHaydens Road\n",
            "city": "Harlow",
            "CountryCode": "GB",
            "postcode": "CM20 1AR",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 19:00\nSaturday: 09:00 - 18:00\nSunday: 10:00 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.210399, 54.690564]
        },
        "properties": {
            "StoreId": "51",
            "name": "Hartlepool",
            "address": "Matalan - Unit 1 Anchor Retail Park\nMarina Way\n",
            "city": "Hartlepool",
            "CountryCode": "GB",
            "postcode": "TS24 0XR",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 08:30 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.413253, 51.505718]
        },
        "properties": {
            "StoreId": "112",
            "name": "Hayes",
            "address": "Matalan - Pump Lane\n\n",
            "city": "Hayes",
            "CountryCode": "GB",
            "postcode": "UB3 3NB",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 21:00\nSaturday: 09:00 - 20:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "London"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.06923, 51.79748]
        },
        "properties": {
            "StoreId": "111",
            "name": "Hertford",
            "address": "Matalan - Unit 2 Madford Ret Pk\nWare Road\n",
            "city": "Hertford",
            "CountryCode": "GB",
            "postcode": "SG13 7RQ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.755962, 51.632965]
        },
        "properties": {
            "StoreId": "210",
            "name": "High Wycombe",
            "address": "Matalan - Unit 2\nBellField Road\n",
            "city": "Buckinghamshire",
            "CountryCode": "GB",
            "postcode": "HP13 5PN",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.783618, 53.653264]
        },
        "properties": {
            "StoreId": "79",
            "name": "Huddersfield",
            "address": "Matalan - Ringway Industrial Estate\n\n",
            "city": "Huddersfield",
            "CountryCode": "GB",
            "postcode": "HD1 5DG",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Yorkshire and the Humber"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.314468, 53.751705]
        },
        "properties": {
            "StoreId": "157",
            "name": "Hull city",
            "address": "Matalan - The Mount Retail Park\nMount Pleasant\nSutton-on-Hull",
            "city": "Hull city",
            "CountryCode": "GB",
            "postcode": "HU9 2BN",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 08:00 - 20:00\nSunday: 10:00 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Yorkshire and the Humber"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.346494, 53.795115]
        },
        "properties": {
            "StoreId": "67",
            "name": "Hull Kingswood",
            "address": "Matalan - Kingswood Retail Park\nBude Road\n",
            "city": "Hull",
            "CountryCode": "GB",
            "postcode": "HU7 4AQ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 21:00\nSaturday: 09:00 - 20:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Yorkshire and the Humber"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.870657, 53.357912]
        },
        "properties": {
            "StoreId": "28",
            "name": "Hunts Cross",
            "address": "Matalan - Unit G  The Triumph Cntr\nHunts Cross\n",
            "city": "Liverpool",
            "CountryCode": "GB",
            "postcode": "L24 9GB",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19.00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-4.190809, 57.468508]
        },
        "properties": {
            "StoreId": "72",
            "name": "Inverness",
            "address": "Matalan - Unit 1 Inshes Retail Park\n\n",
            "city": "Inverness",
            "CountryCode": "GB",
            "postcode": "IV2 3TW",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 18:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [1.134952, 52.055088]
        },
        "properties": {
            "StoreId": "216",
            "name": "Ipswich",
            "address": "Matalan - Unit 4 Orwell Retail Park\nRanelagh Road\n",
            "city": "Ipswich",
            "CountryCode": "GB",
            "postcode": "IP2 0AQ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 20:00\nSunday: 10:00 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.289915, 50.696607]
        },
        "properties": {
            "StoreId": "158",
            "name": "Isle of Wight",
            "address": "Matalan - Furrlongs\nNewport\n",
            "city": "Isle of Wight",
            "CountryCode": "GB",
            "postcode": "PO30 2AB",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 16:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Isle of Wight"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.734036, 54.341736]
        },
        "properties": {
            "StoreId": "229",
            "name": "Kendal",
            "address": "Unit 7 \nQueen Katherine's Avenue",
            "city": "Kendal",
            "CountryCode": "GB",
            "postcode": "LA9 6DU",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 18:00\nSunday: 10:30 - 16.30",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Retail",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.253945, 52.388415]
        },
        "properties": {
            "StoreId": "104",
            "name": "Kidderminster",
            "address": "Matalan - Former Homebase\nParker Butts Ringway\n",
            "city": "Kidderminster",
            "CountryCode": "GB",
            "postcode": "DY11 6TQ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 16:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.567669, 55.03528]
        },
        "properties": {
            "StoreId": "107",
            "name": "Killingworth",
            "address": "Matalan - The Killingworth Centre\nCitadel West\n",
            "city": "Newcastle Upon Tyne",
            "CountryCode": "GB",
            "postcode": "NE12 6YT",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 08:30 - 20:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-4.507143, 55.585652]
        },
        "properties": {
            "StoreId": "116",
            "name": "Kilmarnock",
            "address": "Matalan - Loreny Industrial Estate\nUmberly Road\n",
            "city": "Kilmarnock",
            "CountryCode": "GB",
            "postcode": "KA1 5LB",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 19:00\nSaturday: 09:00 - 18:00\nSunday: 10:00 - 18:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0.404718, 52.753958]
        },
        "properties": {
            "StoreId": "135",
            "name": "Kings Lynn",
            "address": "Matalan - Blackfriars Road\n\n",
            "city": "Kings Lynn",
            "CountryCode": "GB",
            "postcode": "PE30 1RX",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 16:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.443609, 53.999102]
        },
        "properties": {
            "StoreId": "130",
            "name": "Knaresborough",
            "address": "Matalan - St James Retail Park\nGrimbald Crag Way\n",
            "city": "Knaresborough",
            "CountryCode": "GB",
            "postcode": "HG5 8PZ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 19:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Yorkshire and the Humber"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.842778, 54.054905]
        },
        "properties": {
            "StoreId": "85",
            "name": "Lancaster",
            "address": "Matalan - SunnyCliffe Retail Park\nMellishaw Lane\nMorecambe",
            "city": "Lancaster",
            "CountryCode": "GB",
            "postcode": "LA3 3FE",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 18:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.4698, 53.796631]
        },
        "properties": {
            "StoreId": "122",
            "name": "Leeds Halton",
            "address": "Matalan - Halton District Centre\n263 Selby Road\n",
            "city": "Leeds",
            "CountryCode": "GB",
            "postcode": "LS15 7JR",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Yorkshire and the Humber"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.598186, 53.78406]
        },
        "properties": {
            "StoreId": "68",
            "name": "Leeds Wortley",
            "address": "Matalan - Lower Wortley Road\noff Leeds Ring Road\n",
            "city": "Leeds",
            "CountryCode": "GB",
            "postcode": "LS12 4SL",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Yorkshire and the Humber"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.135158, 52.638513]
        },
        "properties": {
            "StoreId": "60",
            "name": "Leicester",
            "address": "Matalan - 100 Churchgate\nVaughan Way\n",
            "city": "Leicester",
            "CountryCode": "GB",
            "postcode": "LE1 4AL",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 19:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.165672, 52.664338]
        },
        "properties": {
            "StoreId": "161",
            "name": "Leicester Beaumont Leys",
            "address": "Matalan - 94 Beaumont Way\nBeaumont Leys\n",
            "city": "Leicester",
            "CountryCode": "GB",
            "postcode": "LE4 1DS",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.014622, 51.465274]
        },
        "properties": {
            "StoreId": "73",
            "name": "Lewisham",
            "address": "Matalan - Thurston Road\nLoanpit Vale\n",
            "city": "Lewisham",
            "CountryCode": "GB",
            "postcode": "SE13 7SN",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "London"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0.011481, 51.568843]
        },
        "properties": {
            "StoreId": "126",
            "name": "Leytonstone",
            "address": "Matalan - 829-837 High Road\n\n",
            "city": "Leytonstone",
            "CountryCode": "GB",
            "postcode": "E11 1HH",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 20:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "London"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.580913, 53.204029]
        },
        "properties": {
            "StoreId": "29",
            "name": "Lincoln",
            "address": "Matalan - Lindis Ret Pk\nTritton Road\n",
            "city": "Lincoln",
            "CountryCode": "GB",
            "postcode": "LN6 7QY",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 21:00\nSaturday: 09:00 - 20:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-4.466608, 55.844484]
        },
        "properties": {
            "StoreId": "89",
            "name": "Linwood",
            "address": "Matalan - Phoenix Retail Park\nLinwood Road\n",
            "city": "Linwood",
            "CountryCode": "GB",
            "postcode": "PA1 2AB",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 18.00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.944984, 53.403309]
        },
        "properties": {
            "StoreId": "144",
            "name": "Liverpool",
            "address": "Matalan - Wavertree Retail Park\nWavertree Road\n",
            "city": "Liverpool",
            "CountryCode": "GB",
            "postcode": "L7 5LZ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.983159, 53.406163]
        },
        "properties": {
            "StoreId": "219",
            "name": "Liverpool city Centre",
            "address": "Matalan - Unit 5 Williamson Square",
            "city": "Liverpool",
            "CountryCode": "GB",
            "postcode": "L1 1EJ",
            "Email": "",
            "hours": "Monday - Wednesday 09:00 - 18:00\nThursday 09:00 - 19:00\nFriday - Saturday 09:00 - 18:00\nSunday 11:00 - 17:00",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Retail",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.519053, 55.88209]
        },
        "properties": {
            "StoreId": "150",
            "name": "Livingston",
            "address": "Matalan - 1 Almondvale Sth Ret Pk\nAlmondvale Av\n",
            "city": "Livingston",
            "CountryCode": "GB",
            "postcode": "EH54 6QX",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 18:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.375235, 51.532433]
        },
        "properties": {
            "StoreId": "30",
            "name": "Llantrisant",
            "address": "Matalan - Unit 8\nGlamorgan Vale Ret Pk\n",
            "city": "Pontyclun",
            "CountryCode": "GB",
            "postcode": "CF72 8RP",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Wales"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-7.299406, 54.988762]
        },
        "properties": {
            "StoreId": "192",
            "name": "Londonderry",
            "address": "Matalan - Lisnagelvin Retail Park\n3 Crescent Rd\n",
            "city": "Londonderry",
            "CountryCode": "GB",
            "postcode": "BT47 2NQ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 21:00\nSaturday: 09:00 - 19:00\nSunday: 12:30 - 18:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Northern Ireland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.138003, 52.987884]
        },
        "properties": {
            "StoreId": "181",
            "name": "Longton",
            "address": "Matalan - Heathcote Rd\nLongton\n",
            "city": "Stoke-on-Trent",
            "CountryCode": "GB",
            "postcode": "ST3 2JR",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.416147, 51.875164]
        },
        "properties": {
            "StoreId": "156",
            "name": "Luton",
            "address": "Matalan - Castle Street\n\n",
            "city": "Luton",
            "CountryCode": "GB",
            "postcode": "LU1 3AG",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 20:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.129325, 53.237645]
        },
        "properties": {
            "StoreId": "202",
            "name": "Macclesfield",
            "address": "Matalan - Unit 8 Lyme Green Ret Pk\nLyme Green\n",
            "city": "Macclesfield",
            "CountryCode": "GB",
            "postcode": "SK11 0TB",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0.517606, 51.271599]
        },
        "properties": {
            "StoreId": "36",
            "name": "Maidstone",
            "address": "Matalan - Unit A Broadway Shop Cntr\nThe Broadway\n",
            "city": "Maidstone",
            "CountryCode": "GB",
            "postcode": "ME16 8PS",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 16:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.304006, 52.130605]
        },
        "properties": {
            "StoreId": "103",
            "name": "Malvern",
            "address": "Matalan - Unit 10 Malvern Ret Pk\nRoman Way\n",
            "city": "Malvern",
            "CountryCode": "GB",
            "postcode": "WR14 1JQ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.257196, 53.123172]
        },
        "properties": {
            "StoreId": "90",
            "name": "Mansfield",
            "address": "Matalan - The Broad Centre\nStation Road\nSutton in Ashfield",
            "city": "Nottingham",
            "CountryCode": "GB",
            "postcode": "NG17 5FH",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.110009, 52.47892]
        },
        "properties": {
            "StoreId": "178",
            "name": "Merry Hill",
            "address": "Matalan - Unit 6 Merry Hill Ret Pk\nBrierly Hill\n",
            "city": "Dudley",
            "CountryCode": "GB",
            "postcode": "DY5 1SY",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.393101, 51.749735]
        },
        "properties": {
            "StoreId": "182",
            "name": "Merthyr Tydfil",
            "address": "Matalan - Merther Tydfil Ret Pk\nSwansea Road\n",
            "city": "Merthyr Tydfil",
            "CountryCode": "GB",
            "postcode": "CF48 1HY",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Wales"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.180223, 54.570224]
        },
        "properties": {
            "StoreId": "88",
            "name": "Middlesbrough",
            "address": "Matalan - Cleaveland Retail Park\nSkippers Lane\n",
            "city": "Middlesbrough",
            "CountryCode": "GB",
            "postcode": "TS6 6UX",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 21:00\nSaturday: 09:00 - 20:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.722599, 52.001123]
        },
        "properties": {
            "StoreId": "78",
            "name": "Milton Bletchley",
            "address": "Matalan - 103 Watling Street\nBletchley\n",
            "city": "Milton Keynes",
            "CountryCode": "GB",
            "postcode": "MK1 1HS",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.27304, 51.403995]
        },
        "properties": {
            "StoreId": "188",
            "name": "New Malden",
            "address": "Matalan - 205-217 Kingston Road\n\n",
            "city": "New Malden",
            "CountryCode": "GB",
            "postcode": "KT3 3SY",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "London"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.318416, 51.385511]
        },
        "properties": {
            "StoreId": "203",
            "name": "Newbury",
            "address": "Matalan - Unit 6\nNewbury Retail park\n",
            "city": "Newbury",
            "CountryCode": "GB",
            "postcode": "RG14 7HU",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.66659, 55.011997]
        },
        "properties": {
            "StoreId": "43",
            "name": "Newcastle",
            "address": "Matalan - Unit 1 Belvedere Ret Pk\nBrunton Parkway\n",
            "city": "Newcastle Upon Tyne",
            "CountryCode": "GB",
            "postcode": "NE3 2PA",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 21:00\nSaturday: 08:30 - 20:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.947391, 51.575345]
        },
        "properties": {
            "StoreId": "211",
            "name": "Newport (Clearance)",
            "address": "Matalan - 7 Stiles Avenue\n\n",
            "city": "Newport",
            "CountryCode": "GB",
            "postcode": "NP19 4TX",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 18:00\nSaturday: 09:00 - 18:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Clearance",
            "Categorynames": "",
            "Region": "Wales"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.594965, 50.542175]
        },
        "properties": {
            "StoreId": "118",
            "name": "Newton Abbot",
            "address": "Matalan - Newton Abbot\nNewton Abbott Reatil Park\n",
            "city": "Newton Abbot",
            "CountryCode": "GB",
            "postcode": "TQ12 3SB",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-5.916715, 54.653992]
        },
        "properties": {
            "StoreId": "179",
            "name": "Newtownabbey",
            "address": "Matalan - Unit 1Newtownabbey Ret Pk\nLongwood Road\n",
            "city": "Newtownabbey",
            "CountryCode": "GB",
            "postcode": "BT37 9UF",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 21:00\nSaturday: 09:00 - 19:00\nSunday: 12:30 - 18:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Northern Ireland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-5.691155, 54.58766]
        },
        "properties": {
            "StoreId": "214",
            "name": "Newtownards",
            "address": "Matalan - Castlebawn Shop Cntr\nPortaferry Rd\n",
            "city": "Newtownards",
            "CountryCode": "GB",
            "postcode": "BT23 8NN",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 21:00\nSaturday: 09:00 - 19:00\nSunday: 12:30 - 18:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Northern Ireland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.929039, 52.239105]
        },
        "properties": {
            "StoreId": "5",
            "name": "Northampton",
            "address": "Matalan - Unit 1Weedon Road Ind Est\nTyne Road\n",
            "city": "Northampton",
            "CountryCode": "GB",
            "postcode": "NN5 5BE",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.507365, 53.263738]
        },
        "properties": {
            "StoreId": "128",
            "name": "Northwich",
            "address": "Matalan - Leicester Street\n\n",
            "city": "Northwich",
            "CountryCode": "GB",
            "postcode": "CW9 5LG",
            "Email": "",
            "hours": "Monday - Friday: 08:00 - 20:00\nSaturday: 08:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [1.307077, 52.624113]
        },
        "properties": {
            "StoreId": "201",
            "name": "Norwich",
            "address": "Matalan - Unit 6a Riverside Ret Pk\n\n",
            "city": "Norwich",
            "CountryCode": "GB",
            "postcode": "NR1 1WU",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.191182, 53.006503]
        },
        "properties": {
            "StoreId": "50",
            "name": "Nottingham Bulwell",
            "address": "Matalan - Unit 6 Springfield Rt Pk\nHucknall Lane\n",
            "city": "Nottingham",
            "CountryCode": "GB",
            "postcode": "NG6 8AJ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.243777, 52.903155]
        },
        "properties": {
            "StoreId": "39",
            "name": "Nottingham Chil",
            "address": "Matalan - East West Link Road\nEast West Link Road\n",
            "city": "Nottingham",
            "CountryCode": "GB",
            "postcode": "NG9 6DS",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.020326, 52.500711]
        },
        "properties": {
            "StoreId": "37",
            "name": "Oldbury",
            "address": "Matalan - Portway Road\nPortway Road\n",
            "city": "Oldbury",
            "CountryCode": "GB",
            "postcode": "B69 2BZ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.108236, 53.537149]
        },
        "properties": {
            "StoreId": "220",
            "name": "Oldham",
            "address": "Matalan - Unit 2\nAlexandria Retail Park\n",
            "city": "Oldham",
            "CountryCode": "GB",
            "postcode": "OL4 1SA",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 18:00\nSunday: 10:30 - 17:00",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.175378, 53.473821]
        },
        "properties": {
            "StoreId": "146",
            "name": "Openshaw",
            "address": "Matalan - Ashton Old Road\nHigher Openshaw\n",
            "city": "Manchester",
            "CountryCode": "GB",
            "postcode": "M11 2NN",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.21788, 51.732674]
        },
        "properties": {
            "StoreId": "10",
            "name": "Oxford",
            "address": "Matalan - Unit 5 John Allen Centre\nCowley\n",
            "city": "Oxford",
            "CountryCode": "GB",
            "postcode": "OX4 3JP",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.137072, 51.515631]
        },
        "properties": {
            "StoreId": "233",
            "name": "Oxford Street",
            "address": "Matalan - 149-151 Oxford St\nLondon",
            "city": "London",
            "CountryCode": "GB",
            "postcode": "W1D 2JF",
            "Email": "",
            "hours": "Monday - Friday: 09:30 - 21:00 \nSaturday: 09:00 - 21:00\nSunday: 12:30 - 18:30",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Retail",
            "Categorynames": "",
            "Region": "London"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.430782, 56.393336]
        },
        "properties": {
            "StoreId": "83",
            "name": "Perth",
            "address": "Matalan - Victoria Street\n",
            "city": "Perth",
            "CountryCode": "GB",
            "postcode": "PH2 8JT",
            "Email": "",
            "hours": "Monday - Wednesday  09:00 - 18:00\nThursday - Friday 09.00 - 19.00\nSaturday: 09:00 – 18:00\nSunday: 10:30 – 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.258603, 52.592513]
        },
        "properties": {
            "StoreId": "196",
            "name": "Peterborough",
            "address": "Matalan - Unit 2 Maskew Avenue\n\n",
            "city": "Peterborough",
            "CountryCode": "GB",
            "postcode": "PE1 2HS",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 20:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-4.15157, 50.410666]
        },
        "properties": {
            "StoreId": "109",
            "name": "Plymouth",
            "address": "Matalan - Transit Way\n\n",
            "city": "Plymouth",
            "CountryCode": "GB",
            "postcode": "PL5 3TW",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 08:30 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.92761, 50.756576]
        },
        "properties": {
            "StoreId": "24",
            "name": "Poole",
            "address": "Matalan - Units 2-3 Turbary Ret Pk\nRingwood Road\n",
            "city": "Poole",
            "CountryCode": "GB",
            "postcode": "BH11 8LL",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.136849, 57.063614]
        },
        "properties": {
            "StoreId": "173",
            "name": "Portlethen",
            "address": "Matalan - Unit 2\n2 Muirend Court\n",
            "city": "Portlethen",
            "CountryCode": "GB",
            "postcode": "AB12 4XP",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 18:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.089123, 50.79879]
        },
        "properties": {
            "StoreId": "48",
            "name": "Portsmouth",
            "address": "Matalan - Station Street\n\n",
            "city": "Portsmouth",
            "CountryCode": "GB",
            "postcode": "PO1 1BE",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 19:00\nSaturday: 09:00 - 18:00\nSunday: 10:00 - 16:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.671655, 53.724579]
        },
        "properties": {
            "StoreId": "2",
            "name": "Preston",
            "address": "Matalan - Holme Road\n\n",
            "city": "Preston",
            "CountryCode": "GB",
            "postcode": "PR5 6BP",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 18:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.976497, 51.444398]
        },
        "properties": {
            "StoreId": "21",
            "name": "Reading",
            "address": "Matalan - Rose Kiln Lane\n\n",
            "city": "Reading",
            "CountryCode": "GB",
            "postcode": "RG2 0SN",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.935536, 52.299845]
        },
        "properties": {
            "StoreId": "152",
            "name": "Redditch",
            "address": "Matalan - Jinnah Road\nTunnel Drive\n",
            "city": "Redditch",
            "CountryCode": "GB",
            "postcode": "B98 7ER",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 18:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.48564, 53.318738]
        },
        "properties": {
            "StoreId": "137",
            "name": "Rhyl",
            "address": "Matalan - Greenfield Place\n\n",
            "city": "Rhyl",
            "CountryCode": "GB",
            "postcode": "LL18 2BP",
            "Email": "",
            "hours": "Monday -  Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Wales"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.151551, 53.613014]
        },
        "properties": {
            "StoreId": "110",
            "name": "Rochdale",
            "address": "Matalan - Central Retail Park\nOldham Road\n",
            "city": "Rochdale",
            "CountryCode": "GB",
            "postcode": "OL11 1DZ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0.176738, 51.581831]
        },
        "properties": {
            "StoreId": "218",
            "name": "Romford",
            "address": "Matalan - 117 North Street\nRomford\n",
            "city": "Greater London",
            "CountryCode": "GB",
            "postcode": "RM1 1ES",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 20:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.3455011999999442, 53.4441616]
        },
        "properties": {
            "StoreId": "236",
            "name": "Rotherham ",
            "address": "Unit 14\nStadium Way\nRotherham\nParkgate\nSouth Yorkshire",
            "city": "Rotherham",
            "CountryCode": "GB",
            "postcode": "S60 1TG",
            "Email": "",
            "hours": "#N/A",
            "phone": "0333 004 4444",
            "ZoomLevel": "0",
            "Active": "False",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Retail",
            "Categorynames": "",
            "Region": "Yorkshire and the Humber"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.259182, 52.385227]
        },
        "properties": {
            "StoreId": "228",
            "name": "Rugby",
            "address": "Unit L2\t\nJunction One Retail Park\nLeicester Road\n\t\t\t\n\t\t\t",
            "city": "Rugby",
            "CountryCode": "GB",
            "postcode": "CV21 1RW",
            "Email": "",
            "hours": "Monday -  Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Retail",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.780121, 51.062669]
        },
        "properties": {
            "StoreId": "115",
            "name": "Salisbury",
            "address": "Matalan - Southampton Road\n\n",
            "city": "Salisbury",
            "CountryCode": "GB",
            "postcode": "SP1 2LE",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.399875, 54.283525]
        },
        "properties": {
            "StoreId": "183",
            "name": "Scarborough",
            "address": "Matalan - 18-46 St Thomas St\nNorth St\n",
            "city": "Scarborough",
            "CountryCode": "GB",
            "postcode": "YO11 1DY",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 18:00\nSaturday: 09:00 - 18:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Yorkshire and the Humber"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.677838, 53.60823]
        },
        "properties": {
            "StoreId": "26",
            "name": "Scunthorpe",
            "address": "Matalan - Unit 3\nSkippingdale Retail Park\n",
            "city": "Scunthorpe",
            "CountryCode": "GB",
            "postcode": "DN15 8NN",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Yorkshire and the Humber"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.963348, 53.485411]
        },
        "properties": {
            "StoreId": "13",
            "name": "Sefton",
            "address": "Matalan - Switch Island Leisure  Pk\nDunnings Bridge Rd\n",
            "city": "Sefton",
            "CountryCode": "GB",
            "postcode": "L30 6TQ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "17",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.47753, 53.356072]
        },
        "properties": {
            "StoreId": "61",
            "name": "Sheffield",
            "address": "Matalan - Unit 1 Heeley Ind Pk\nChesterfield Road\n",
            "city": "Sheffield",
            "CountryCode": "GB",
            "postcode": "S8 0RG",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Yorkshire and the Humber"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.443382, 53.384188]
        },
        "properties": {
            "StoreId": "139",
            "name": "Sheffield Parkway",
            "address": "Matalan - Unit 2 Cricket Inn Road\nParkway\n",
            "city": "Sheffield",
            "CountryCode": "GB",
            "postcode": "S2 5AU",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 21:00\nSaturday: 09:00 - 20:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Yorkshire and the Humber"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.730722, 52.737582]
        },
        "properties": {
            "StoreId": "84",
            "name": "Shrewsbury",
            "address": "Matalan - Harlescott Retail Park\nBrixton Way\n",
            "city": "Shrewsbury",
            "CountryCode": "GB",
            "postcode": "SY1 3AZ",
            "Email": "",
            "hours": "Monday -  Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.623201, 51.515284]
        },
        "properties": {
            "StoreId": "57",
            "name": "Slough",
            "address": "Matalan - 217 Bath Road\n\n",
            "city": "Slough",
            "CountryCode": "GB",
            "postcode": "SL1 4AA",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 21:00\nSaturday: 09:00 - 20:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.961669, 52.48779]
        },
        "properties": {
            "StoreId": "187",
            "name": "Smethwick",
            "address": "Matalan - Windmill Retail Centre\nLime Grove\nWindmill Lane",
            "city": "Smethwick",
            "CountryCode": "GB",
            "postcode": "B66 3ER",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 20:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.3594089, 51.5063835]
        },
        "properties": {
            "StoreId": "82",
            "name": "Southall",
            "address": "Matalan - Great Western Retail Park\nArmstrong Way off Windmill Lane\n",
            "city": "Southall",
            "CountryCode": "GB",
            "postcode": "UB2 4SD",
            "Email": "",
            "hours": "Monday - Friday: 10:00 - 20:00\nSaturday: 09:00 - 20:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "London"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0.717471, 51.545289]
        },
        "properties": {
            "StoreId": "41",
            "name": "Southend",
            "address": "Matalan - The Greyhound Retail Park\nSutton Road\n",
            "city": "Southend",
            "CountryCode": "GB",
            "postcode": "SS2 5PY",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 18:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.011739, 53.653291]
        },
        "properties": {
            "StoreId": "145",
            "name": "Southport",
            "address": "Matalan - Ocean Plaza\nMarine Drive\n",
            "city": "Southport",
            "CountryCode": "GB",
            "postcode": "PR8 1RY",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 20:00\nSunday: Browsing Time: 10:30 \nStore Opens: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.341327, 51.74282]
        },
        "properties": {
            "StoreId": "133",
            "name": "St Albans",
            "address": "Matalan - Unit 1 St Albans Ret Pk\nGriffiths Way\n",
            "city": "St Albans",
            "CountryCode": "GB",
            "postcode": "AL1 2RJ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.728738, 53.450421]
        },
        "properties": {
            "StoreId": "75",
            "name": "St Helens",
            "address": "Matalan - 2 Watts Clist Way\nTodd Road\n",
            "city": "St Helens",
            "CountryCode": "GB",
            "postcode": "WA9 1JL",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.101187, 52.796025]
        },
        "properties": {
            "StoreId": "7",
            "name": "Stafford",
            "address": "Matalan - 5-6  Queensville Ret Pk\nSilkmore Lane\n",
            "city": "Stafford",
            "CountryCode": "GB",
            "postcode": "ST17 4SU",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.508816, 51.432473]
        },
        "properties": {
            "StoreId": "151",
            "name": "Staines",
            "address": "Matalan - Unit 21 \nThe Elmsleigh Centre\n",
            "city": "Staines",
            "CountryCode": "GB",
            "postcode": "TW18 4QB",
            "Email": "",
            "hours": "Monday - Friday: 08:30 - 18:30\nSaturday: 09:00 - 18:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.808922, 52.486949]
        },
        "properties": {
            "StoreId": "56",
            "name": "Stechford",
            "address": "Matalan - Unit 2 Flaxley Parkway\nStation Road\nStechford",
            "city": "Birmingham",
            "CountryCode": "GB",
            "postcode": "B33 9AN",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 20:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.203041, 51.901434]
        },
        "properties": {
            "StoreId": "34",
            "name": "Stevenage",
            "address": "Matalan - Units  B  C   Danestrete\n\n",
            "city": "Stevenage",
            "CountryCode": "GB",
            "postcode": "SG1 1XB",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 19:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.154292, 53.412065]
        },
        "properties": {
            "StoreId": "140",
            "name": "Stockport",
            "address": "Matalan - Millgate\n\n",
            "city": "Stockport",
            "CountryCode": "GB",
            "postcode": "SK1 2LX",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 18:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.312678, 54.558284]
        },
        "properties": {
            "StoreId": "98",
            "name": "Stockton",
            "address": "Matalan - Bridge Road Retai\nl Park Parkfield Road\n",
            "city": "Stockton-on-Tees",
            "CountryCode": "GB",
            "postcode": "TS18 3AY",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 08:30 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.208382, 53.02952]
        },
        "properties": {
            "StoreId": "6",
            "name": "Stoke",
            "address": "Matalan - Wolstanton Retail Park\nWolstanton\n",
            "city": "Stoke-on-Trent",
            "CountryCode": "GB",
            "postcode": "ST5 0AY",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.711724, 52.200588]
        },
        "properties": {
            "StoreId": "9",
            "name": "Stratford",
            "address": "Matalan - Unit E Maybird Centre\nBirmingham Road\n",
            "city": "Stratford-Upon-Avon",
            "CountryCode": "GB",
            "postcode": "CV37 0HZ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 18:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0.493773, 51.393899]
        },
        "properties": {
            "StoreId": "101",
            "name": "Strood",
            "address": "Matalan - Strood Retail PK\nCommercial Road\n",
            "city": "Strood",
            "CountryCode": "GB",
            "postcode": "ME2 2AD",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 09:30 - 16:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.430273, 54.918182]
        },
        "properties": {
            "StoreId": "136",
            "name": "Sunderland",
            "address": "Matalan - Pallions Retail Park\nWoodbine Terrace\n",
            "city": "Sunderland",
            "CountryCode": "GB",
            "postcode": "SR4 6TY",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 20:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.430701, 54.918362]
        },
        "properties": {
            "StoreId": "209",
            "name": "Sunderland Clearance Store",
            "address": "Matalan - Unit 1 Hylton Riverside Retail Park\n\n",
            "city": "Sunderland",
            "CountryCode": "GB",
            "postcode": "SR5 3XG",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 18:00\nSaturday: 09:00 - 18:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Clearance",
            "Categorynames": "",
            "Region": "North East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.193559, 51.368143]
        },
        "properties": {
            "StoreId": "62",
            "name": "Sutton",
            "address": "Matalan - 268/278 High Street\n\n",
            "city": "Sutton",
            "CountryCode": "GB",
            "postcode": "SM1 1PG",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.920203, 51.665497]
        },
        "properties": {
            "StoreId": "17",
            "name": "Swansea",
            "address": "Matalan - Foundry Road\nMorriston\n",
            "city": "Swansea",
            "CountryCode": "GB",
            "postcode": "SA6 8DU",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Wales"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.961749, 51.635635]
        },
        "properties": {
            "StoreId": "99",
            "name": "Swansea Cwmdu",
            "address": "Matalan - Carmarthen Road\nCwmdu Industrial Estate\n",
            "city": "Swansea",
            "CountryCode": "GB",
            "postcode": "SA5 8LJ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Wales"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.754209, 51.572666]
        },
        "properties": {
            "StoreId": "168",
            "name": "Swindon",
            "address": "Matalan - Greenbridge Retail Park\nStratton Road\n",
            "city": "Swindon",
            "CountryCode": "GB",
            "postcode": "SN3 3SG",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.338926, 53.514339]
        },
        "properties": {
            "StoreId": "23",
            "name": "Swinton",
            "address": "Matalan - Westover Street\noff Station Road\n",
            "city": "Manchester",
            "CountryCode": "GB",
            "postcode": "M27 6GF",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.702758, 52.626732]
        },
        "properties": {
            "StoreId": "16",
            "name": "Tamworth",
            "address": "Matalan - Unit 7 Ventura Shop Cntr\nVentura Road\n",
            "city": "Tamworth",
            "CountryCode": "GB",
            "postcode": "B78 3HB",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19.00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.122037, 51.025553]
        },
        "properties": {
            "StoreId": "185",
            "name": "Taunton",
            "address": "Matalan - Bindon Road\n\n",
            "city": "Taunton",
            "CountryCode": "GB",
            "postcode": "TA2 6AA",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 16:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.491271, 52.691506]
        },
        "properties": {
            "StoreId": "42",
            "name": "Telford",
            "address": "Matalan - Unit J\nThe Wrekin Retail Park\n",
            "city": "Telford",
            "CountryCode": "GB",
            "postcode": "TF1 2DE",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [1.397606, 51.360652]
        },
        "properties": {
            "StoreId": "77",
            "name": "Thanet",
            "address": "Matalan - East Kent Retail Park\nWestwood Road\nBroadstairs",
            "city": "Thanet",
            "CountryCode": "GB",
            "postcode": "CT10 2RQ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.209108, 51.302995]
        },
        "properties": {
            "StoreId": "212",
            "name": "Trowbridge",
            "address": "Matalan - Unit 1a Trowbridge Ret Pk\nBradley Road\n",
            "city": "Trowbridge",
            "CountryCode": "GB",
            "postcode": "BA14 0RQ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-5.124494, 50.26403]
        },
        "properties": {
            "StoreId": "138",
            "name": "Truro",
            "address": "Matalan - Leverton Place Ret Pk\nChacewater\n",
            "city": "Truro",
            "CountryCode": "GB",
            "postcode": "TR4 8GA",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.207634, 53.056935]
        },
        "properties": {
            "StoreId": "169",
            "name": "Tunstall",
            "address": "Matalan - Woodland Street\nScotia Road\n",
            "city": "Stoke-on-Trent",
            "CountryCode": "GB",
            "postcode": "ST6 6AN",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.497443, 53.677859]
        },
        "properties": {
            "StoreId": "44",
            "name": "Wakefield",
            "address": "Matalan - Ings Road Retail Park\nIngs Road\n",
            "city": "Wakefield",
            "CountryCode": "GB",
            "postcode": "WF1 1RN",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Yorkshire and the Humber"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.002127, 52.595932]
        },
        "properties": {
            "StoreId": "105",
            "name": "Walsall North",
            "address": "Matalan - Walsall Retail Park\nReedswoods Way\n",
            "city": "Walsall ",
            "CountryCode": "GB",
            "postcode": "WS2 8XA",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.99193716, 52.56637327]
        },
        "properties": {
            "StoreId": "38",
            "name": "Walsall South",
            "address": "Matalan - Unit 9  Broadwalk  Ret Pk\nBescot Crescent\n",
            "city": "Walsall",
            "CountryCode": "GB",
            "postcode": "WS1 4SB",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:00 - 16:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "West Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.59433, 53.399276]
        },
        "properties": {
            "StoreId": "31",
            "name": "Warrington",
            "address": "Matalan - Winwick Road\nKerfoot Street\n",
            "city": "Warrington",
            "CountryCode": "GB",
            "postcode": "WA2 8NU",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.530113, 54.903402]
        },
        "properties": {
            "StoreId": "171",
            "name": "Washington",
            "address": "Matalan - The Galleries Retail Park\n\n",
            "city": "Washington",
            "CountryCode": "GB",
            "postcode": "NE38 7RW",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 08:30 - 20:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.033392, 50.880933]
        },
        "properties": {
            "StoreId": "129",
            "name": "Waterlooville",
            "address": "Matalan - Unit 6 Wellinton Ret Pk\nHambledon Road\n",
            "city": "Waterlooville",
            "CountryCode": "GB",
            "postcode": "PO7 7FG",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 18:00\nSunday: 10:00 - 16:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.689647, 52.302267]
        },
        "properties": {
            "StoreId": "91",
            "name": "Wellingborough",
            "address": "Matalan - 31-34 Victoria Road\n\n",
            "city": "Wellingborough",
            "CountryCode": "GB",
            "postcode": "NN8 1HH",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 18:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0.271979, 51.484475]
        },
        "properties": {
            "StoreId": "8",
            "name": "West Thurrock",
            "address": "Matalan - Unit 4B The Tunnel Estate\nWeston Avenue\n",
            "city": "West Thurrock",
            "CountryCode": "GB",
            "postcode": "RM20 3HH",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South East"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.914125, 51.352546]
        },
        "properties": {
            "StoreId": "80",
            "name": "Weston Supermare",
            "address": "Matalan - Summer Lane\nWorle\n",
            "city": "Weston Super-Mare",
            "CountryCode": "GB",
            "postcode": "BS24 7AY",
            "Email": "",
            "hours": "Monday - Friday: 08:00 - 20:00\nSaturday: 08:00 - 20:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.4581, 50.617182]
        },
        "properties": {
            "StoreId": "64",
            "name": "Weymouth",
            "address": "Matalan - Unit 2 Jubilee Ret Pk\nRadipole Drive\n",
            "city": "Weymouth",
            "CountryCode": "GB",
            "postcode": "DT4 7BG",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.651654, 53.543764]
        },
        "properties": {
            "StoreId": "52",
            "name": "Wigan",
            "address": "Matalan - 35 Loire Drive\nRobin Retail Park\n",
            "city": "Wigan",
            "CountryCode": "GB",
            "postcode": "WN5 0UH",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.947433, 55.775909]
        },
        "properties": {
            "StoreId": "4",
            "name": "Wishaw",
            "address": "Matalan - Unit 5 Caledonian Centre\n337 Glasgow Rd\n",
            "city": "Wishaw",
            "CountryCode": "GB",
            "postcode": "ML2 7SN",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 19:00\nSaturday: 09:00 - 18:00\nSunday: 10:00 - 18.00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Scotland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.104977, 51.593117]
        },
        "properties": {
            "StoreId": "208",
            "name": "Wood Green (Clearance)",
            "address": "Matalan - Lymington Avenue\n\n",
            "city": "Wood Green",
            "CountryCode": "GB",
            "postcode": "N22 6JA",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 18.00\nSaturday: 09:00 - 18:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Clearance",
            "Categorynames": "",
            "Region": "London"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.561772, 54.636418]
        },
        "properties": {
            "StoreId": "18",
            "name": "Workington",
            "address": "Matalan - Plot 12 Derwent House\nSolway Road\n",
            "city": "Workington",
            "CountryCode": "GB",
            "postcode": "CA14 3YA",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 18:00\nSunday: 10:00 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "North West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.121441, 53.307589]
        },
        "properties": {
            "StoreId": "134",
            "name": "Worksop",
            "address": "Matalan - 16 Eastgate/Bridge Street\n\n",
            "city": "Worksop",
            "CountryCode": "GB",
            "postcode": "S80 1RF",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "East Midlands"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.990333, 53.043714]
        },
        "properties": {
            "StoreId": "86",
            "name": "Wrexham",
            "address": "Matalan - Unit 1Mount Street Ret Pk\nMount Street\n",
            "city": "Wrexham",
            "CountryCode": "GB",
            "postcode": "LL13 8DW",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Wales"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.605925, 50.940471]
        },
        "properties": {
            "StoreId": "81",
            "name": "Yeovil",
            "address": "Matalan - The Peel Centre\nBabylon Hill\n",
            "city": "Yeovil",
            "CountryCode": "GB",
            "postcode": "BA21 5BT",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00\nSaturday: 09:00 - 19:00\nSunday: 10:30 - 16:30\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "0",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "South West"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.097897, 53.993983]
        },
        "properties": {
            "StoreId": "11",
            "name": "York",
            "address": "Matalan - Units 10  11\nClifton Moore Centre\n",
            "city": "York",
            "CountryCode": "GB",
            "postcode": "YO30 4XZ",
            "Email": "",
            "hours": "Monday - Friday: 09:00 - 20:00 \nSaturday: 09:00 - 19:00\nSunday: 11:00 - 17:00\n",
            "phone": "03330044444",
            "phoneFormatted": "Tel:0333 0044444",
            "ZoomLevel": "15",
            "Active": "True",
            "Comments": "",
            "Description": "",
            "StoreTypes": "Boutique",
            "Categorynames": "",
            "Region": "Yorkshire and the Humber"
        }
    }];


    var geolocate = document.getElementById('geolocate')
    var map = L.mapbox.map('map', 'mapbox.streets')
        .setView([54.89, -4.11], 6);

    map.scrollWheelZoom.disable();

    var listings = document.getElementById('listings');
    var locations = L.mapbox.featureLayer().addTo(map);

    // This uses the HTML5 geolocation API, which is available on
    // most mobile browsers and modern browsers, but not in Internet Explorer
    //
    // See this chart of compatibility for details:
    // http://caniuse.com/#feat=geolocation
    if (!navigator.geolocation) {
        geolocate.innerHTML = 'Geolocation is not available';
    } else {
        geolocate.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            map.locate();
        };
    }

    map.on('locationfound', function(e) {
        map.fitBounds(e.bounds);
        map.setView([e.latlng.lat, e.latlng.lng], 12);


    });

    // If the user chooses not to allow their location
    // to be shared, display an error message.
    map.on('locationerror', function() {
        geolocate.innerHTML = 'Position could not be found';
    });

    locations.setGeoJSON(geojson);

    function setActive(el) {
        var siblings = listings.getElementsByTagName('div');
        for (var i = 0; i < siblings.length; i++) {
            siblings[i].className = siblings[i].className
                .replace(/active/, '').replace(/\s\s*$/, '');
        }

        el.className += ' active';
    }

    function setupMap(el) {
        locations.eachLayer(function(locale) {

            // Shorten locale.feature.properties to just `prop` so we're not
            // writing this long form over and over again.
            var prop = locale.feature.properties;

            // Each marker on the map.
            var popup = '<h3>Matalan</h3><div>' + prop.city;
            var link = listings.appendChild(document.createElement('a'));
            link.href = '#';
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

            listing.onclick = function() {
                setActive(wrapper);

                // When a menu item is clicked, animate the map to center
                // its associated locale and open its popup.
                map.setView(locale.getLatLng(), 16);
                locale.openPopup();
                return false;
            };

            // Marker interaction
            locale.on('click', function(e) {
                // 1. center the map on the selected marker.
                map.panTo(locale.getLatLng());

                // 2. Set active the markers associated listing.
                setActive(wrapper);
            });

            popup += '</div>';
            locale.bindPopup(popup);

            locale.setIcon(L.icon({
                iconUrl: './img/marker.png',
                iconSize: [56, 56],
                iconAnchor: [35, 35],
                popupAnchor: [0, -34]
            }));

        });
    }

    setupMap();
});
// ===========================
// Mapbox End
// ===========================

// ===========================
// Tabs
// ===========================

require("./modules/tabs");

// open first tab here, so we don't need to include 2x active classes on each usage

$.each($('.c-tabs [role="tablist"]'), function() {
    $(this).find('a:first').tab('show');
});

// ===========================
// Tabs end
// ===========================




// ===========================
// accordion
// ===========================
require("./modules/collapse");

// open specific item example
// todo - currently issues with pre opening tabs this way - to investigate
// $('#collapseThree').collapse('show');

// open all on load example (for non accordion accordion, eg filters)
$(document).ready(function() {
    if (!window.isMobileOrTablet.matches) {

        // on load, open if desktop
        $("#accordion2 [role='tabpanel']").each(function() {
            $(this).collapse('show');
        });

    }
    $(window).on('resize', _.debounce(function() {
        if (!window.isMobileOrTablet.matches) {
            // on resize, open if desktop
            $("#accordion2 [role='tabpanel']").each(function() {
                $(this).collapse('show');
            });

        } else {
            // on resize, close if not desktop
            $("#accordion2 [role='tabpanel']").each(function() {
                $(this).collapse('hide');
            });

        }
    }, 250));
});


// ===========================
// accordion end
// ===========================





// ===========================
// Megamenu init
// ===========================
function megamenuInit() {
    var accessibleMegaMenu = require("./modules/menu-accessible");
    var parentNavMenu = $('[data-app="accessible-navmenu"]');

    parentNavMenu.accessibleMegaMenu({
        /* prefix for generated unique id attributes, which are required to indicate aria-owns, aria-controls and aria-labelledby */
        uuidPrefix: "accessible-menu",
        menuClass: "c-navbar",
        topNavItemClass: "navbar__top-item",
        panelClass: "sub-nav",
        panelGroupClass: "sub-nav-group",
        hoverClass: "hover",
        focusClass: "focus",
        openClass: "open"
    });
}


if (!window.isMobileOrTablet.matches) {
    megamenuInit();
}


// ===========================
// Megamenu end
// ===========================


if (window.isMobileOrTablet.matches) {
    require("./modules/off-canvas");
}

// ===========================
// SelectBox init
// ===========================
var selectBox = require("./modules/selectbox");

$('select').selectBox({
    mobile: false,
    loopOptions: true
});
// ===========================
// SelectBox End
// ===========================


// ===========================
// Sticky Headers
// ===========================

require("./modules/sticky-headers");

// =========================
// Sticky Headers End
// ===========================


// ===========================
// Slick Slider initialisation
// ===========================
var slick = require("./vendors/slick");


$('.o-section-department__slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});




// $('.o-product__slider').on('init', function(event, slick){
//   $('.slick-active').prev().addClass('slick-item-prev');
//   $('.slick-active').next().addClass('slick-item-next');
// });
var PhotoSwipe = require("./vendors/photoswipe");
var PhotoSwipeUI_Default = require("./vendors/photoswipe-ui");

$('.o-product__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px'
});


var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for (var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes
            if (figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if (figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML;
            }

            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if (!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }

            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if (index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {
            //             loop:false,
            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return {
                    x: rect.left,
                    y: rect.top + pageYScroll,
                    w: rect.width
                };
            }

        };

        // PhotoSwipe opened from URL
        if (fromURL) {
            if (options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if (isNaN(options.index)) {
            return;
        }

        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
        var psIndex = gallery.getCurrentIndex();
        var psIndexSlick = psIndex - 1;
        console.log(psIndexSlick);
        gallery.listen('afterChange', function() {
            var psIndex = gallery.getCurrentIndex();
            var psIndexSlick = psIndex - 1;
            console.log(psIndexSlick);
            $(".o-product__slider").slick("slickGoTo", psIndexSlick);
        });
    };


    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll(gallerySelector);

    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }





};

// execute above function
initPhotoSwipeFromDOM('.product-images');


// ===========================
// Slick Slider End
// ===========================


// ===========================
// Range Slider init
// ===========================
(function() {
    if ($("#filters--range").length) {
        var noUiSlider = require("./modules/nouislider");

        var slider = document.getElementById('filters--range');
        var sliderValues = [
            document.getElementById('slider-value-lower'),
            document.getElementById('slider-value-upper')
        ];

        noUiSlider.create(slider, {
            start: [20, 80],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });
        slider.noUiSlider.on('update', function(values, handle) {
            sliderValues[handle].innerHTML = '£' + Math.round(values[handle]).toFixed(0);
        });
    }
})();
// ===========================
// Range Slider End
// ===========================



// Self Initialising...
require("./modules/minibag");
require("./modules/filters");
require("./modules/scroll-lock");
// Self Initialising end


// ===========================
// Misc rules to tidy
// ===========================
(function() {
    // header - show mobile search input field
    $('.header--mobile-search').on('click', function() {
        $(this).toggleClass('active');
        $('.header--search-bar').toggleClass('active').find('input').focus();
    });
})();

(function() {
    // search results layout switch
    $('.js-results-tight').on('click', function(e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {

            $(this).addClass('active')
                .siblings().removeClass('active')
                .closest('.search-results__main')
                .removeClass('search-results__wide')
                .addClass('search-results__tight');
        }
    });
    // search results layout switch cont.
    $('.js-results-wide').on('click', function(e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {

            $(this).addClass('active')
                .siblings().removeClass('active')
                .closest('.search-results__main')
                .removeClass('search-results__tight')
                .addClass('search-results__wide');
        }
    });
})();

(function() {
    // global alert event
    $(".global-test").click(function() {
        $(".c-alert-global").toggleClass("active");
    });
})();



(function() {

    // filter collapse / expand
    var toggleFilterCollapse = function(target) {
        $(target).toggleClass('collapse');
        // console.log($(target));
        $(target).find('.icon').toggleClass("icon-plus icon-minus");
    };

    $('body').on('click', '.filter--title', function() {
        toggleFilterCollapse($(this));
    });
    // console.log(isMobileOrTablet);
    if (!window.isMobileOrTablet.matches) {
        toggleFilterCollapse('.filter--title');
    }
})();


// syntax highlighter
// hljs.configure({
//   useBR: false,
//   fixMarkup: true
// });
// hljs.initHighlighting();


// Filters Show more
(function() {
    $('body').on('click', '.filters--show-more', function() {
        $(this).hide();
        $(this).parent().find('label').css('display', 'block');
    });
})();



// bugherd
(function(d, t) {
    var bh = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    bh.type = 'text/javascript';
    bh.src = '//www.bugherd.com/sidebarv2.js?apikey=uswxmej5ryhotdtsi4yw9g';
    s.parentNode.insertBefore(bh, s);
})(document, 'script');
