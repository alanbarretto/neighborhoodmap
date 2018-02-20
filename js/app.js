<script type="text/javascript">
		

		var map;
		var churches;
		var markers = [];
		var options = {
		center: {lat: 36.7468, lng: -119.7726},
		zoom: 6,
		gestrureHandling: "greedy",
		mapTypeControl: false,
		disableDefaultUI: true
		};

		

		function initMap(){
			map = new google.maps.Map(document.getElementById('map'), options)
			console.log(map.getCenter());

			

			parks = [
			{title: 'Channel Islands', location: {lat: 33.9961, lng:-119.7692}},
			{title: 'Death Valley', location: {lat:36.5323, lng:-116.9325}},
			{title: 'Joshua Tree', location: {lat:33.8734, lng:-115.9010}},
			{title: 'Lassen Volcanic', location: {lat:40.4977, lng:-121.4207}},
			{title: 'Pinnacles', location: {lat:36.4906, lng:-121.1825}},
			{title: 'Sequoia National Park', location: {lat:36.486366, lng:-118.565750}},
			{title: 'Redwood National Park', location: {lat:41.213181, lng:-124.004631}},
			{title: 'Kings Canyon', location: {lat:36.887856, lng:-118.555145}},
			{title: 'Yosemite', location: {lat:37.8651, lng:-119.538330}}



		];

			var largeInfowindow = new google.maps.InfoWindow();
			var bounds = new google.maps.LatLngBounds();

			for (var i=0; i<parks.length; i++){
				var position = parks[i].location;
				var title = parks[i].title;
				

				var marker = new google.maps.Marker({
					map: map,
					position: position,
					title: title,
					animation: google.maps.Animation.DROP,
					id: i

				});

				markers.push(marker);

				marker.addListener('click', function(){
					populateInfoWindow(this, largeInfowindow);
				});
				bounds.extend(markers[i].position);

			}
			/*map.fitBounds(bounds);*/

			};


			function parkSearch(){
				bounds = map.getBounds();

				nationalParks = google.maps.PlacesServices()



			};

			function populateInfoWindow(marker, infowindow){
				if (infowindow.marker != marker) {
					infowindow.marker = marker;
					infowindow.setContent('<div>' + marker.title + '</div>');
					infowindow.open(map, marker);

					

					infowindow.addListener('closeclick', function(){
						infowindow.setMarker = null;
					});
				}

			}

	var viewModel = {
	        californiaParks: ko.observableArray(['France', 'Germany', 'Spain'])
	    };

	    ko.applyBindings(viewModel);
			

		

	</script>