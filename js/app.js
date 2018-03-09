var map;
var markers = [];

function initMap(){

		map = new google.maps.Map(document.getElementById('map'), options)


		var largeInfowindow = new google.maps.InfoWindow();
		var bounds = new google.maps.LatLngBounds();

		vm.nationalParks().forEach(function(park){
			var marker = new google.maps.Marker({
				map: map,
				position: park.location,
				title: park.title,
				animation: google.maps.Animation.DROP,
				id: park.id

			});

      vm.markers.push(marker);
      
			park.marker = marker;

			bounds.extend(marker.position);

			marker.addListener('click', function(){
				populateInfoWindow(this, largeInfowindow);
				marker.setAnimation(google.maps.Animation.BOUNCE);
				setTimeout(function(){marker.setAnimation(null);}, 2300);
				var api = parks[this.id-1].weather;
				
  				$.getJSON(api, function(data){
  					var description = data.weather[0].description;
  					$('#weatherNow').text(description);

				});
			});
		});
			var bounds2 = ({lat:32.271456, lng:-125.203577}, {lat:41.920370, lng:-113.098431});

			google.maps.event.addDomListener(window, 'resize', function(){
					map.setCenter({lat: 36.7468, lng: -119.7726});
					map.fitBounds(bounds2);
			});

			
	    	
		}

	function populateInfoWindow(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
          // Clear the infowindow content to give the streetview time to load.
          infowindow.setContent('');
          infowindow.marker = marker;
          // Make sure the marker property is cleared if the infowindow is closed.
          infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
          });
          var streetViewService = new google.maps.StreetViewService();
          var radius = 100;
          // In case the status is OK, which means the pano was found, compute the
          // position of the streetview image, then calculate the heading, then get a
          // panorama from that and set the options

          function getStreetView(data, status) {
            if (status == google.maps.StreetViewStatus.OK) {
              var nearStreetViewLocation = data.location.latLng;
              var heading = google.maps.geometry.spherical.computeHeading(
                nearStreetViewLocation, marker.position);
                infowindow.setContent('<div id="title">' + marker.title + '</div><div id="pano"></div><div id="intro"><span id="banner">Weather today is: </span><span id="weatherNow"></span> </div>');
                var panoramaOptions = {
                  position: nearStreetViewLocation,
                  pov: {
                    heading: heading,
                    pitch: 30
                  }
                };
              var panorama = new google.maps.StreetViewPanorama(
                document.getElementById("pano"), panoramaOptions);
              map.setCenter(data.location.latLng);
            } else {
              infowindow.setContent('<div>' + marker.title + '</div>' +
                '<div>No Street View Found</div>');
            }
          }
          // Use streetview service to get the closest streetview image within
          // 50 meters of the markers position
          streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
          // Open the infowindow on the correct marker.
          infowindow.open(map, marker);
        }
  	};