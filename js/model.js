var options = {
		center: {lat: 36.7468, lng: -119.7726},
		zoom: 6,
		gestrureHandling: "greedy",
		mapTypeControl: true,
		disableDefaultUI: false,
		styles: [
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]
	};

var parks = [
    {title: 'Redwood National Park', location: {lat:41.213181, lng:-124.004631}, weather: "http://api.openweathermap.org/data/2.5/weather?lat=41.213181&lon=-124.004631&appid=b31239a2b00ba340ebc36a016b921d9b", id: 1},
    {title: 'Lassen Volcanic', location: {lat:40.4977, lng:-121.4207}, weather: "http://api.openweathermap.org/data/2.5/weather?lat=40.4977&lon=-121.4207&appid=b31239a2b00ba340ebc36a016b921d9b",  id: 2},
    {title: 'Yosemite', location: {lat:37.8651, lng:-119.538330}, weather: "http://api.openweathermap.org/data/2.5/weather?lat=37.8651&lon=-119.538330&appid=b31239a2b00ba340ebc36a016b921d9b", id: 3},
    {title: 'Kings Canyon', location: {lat:36.887856, lng:-118.555145}, weather: "http://api.openweathermap.org/data/2.5/weather?lat=36.887856&lon=-118.555145&appid=b31239a2b00ba340ebc36a016b921d9b", id: 4},
    {title: 'Sequoia National Park', location: {lat:36.486366, lng:-118.565750}, weather: "http://api.openweathermap.org/data/2.5/weather?lat=36.486366&lon=-118.565750&appid=b31239a2b00ba340ebc36a016b921d9b", id: 5},
    {title: 'Pinnacles', location: {lat:36.4906, lng:-121.1825},  weather: "http://api.openweathermap.org/data/2.5/weather?lat=36.4906&lon=-121.1825&appid=b31239a2b00ba340ebc36a016b921d9b", id: 6},
    {title: 'Death Valley', location: {lat:36.5323, lng:-116.9325},  weather: "http://api.openweathermap.org/data/2.5/weather?lat=36.5323&lon=-116.9325&appid=b31239a2b00ba340ebc36a016b921d9b", id: 7},
    {title: 'Channel Islands', location: {lat: 33.9961, lng:-119.7692},  weather: "http://api.openweathermap.org/data/2.5/weather?lat=33.9961&lon=-119.7692&appid=b31239a2b00ba340ebc36a016b921d9b", id: 8},
    {title: 'Joshua Tree', location: {lat:33.8734, lng:-115.9010},  weather: "http://api.openweathermap.org/data/2.5/weather?lat=33.8734&lon=-115.9010&appid=b31239a2b00ba340ebc36a016b921d9b", id: 9}
    ];