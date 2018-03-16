
    var Parks = function(data){
    	this.title = data.title;
    	this.location = data.location;
    	this.weather = data.weather;
    	this.showMe = data.showMe;
    	this.id = data.id

    }



	function ViewModel(){

		
		var self = this;

		self.selection = ko.observable();

		self.markers = ko.observableArray([]);

		self.nationalParks = ko.observableArray([]);

		//push each parks object into the nationalParks observable array
		parks.forEach(function(data){
			self.nationalParks().push(new Parks(data));
		});

		//when a selection is clicked from the dropdown menu, this function
		//will trigger the marker associated with it as if the marker was clicked, hide the park names that were not selected
		self.selection.subscribe(function(newValue){
			self.setVisibility(null);
			
			ko.utils.arrayFilter(self.nationalParks(), function(park){
				if (park.title === newValue){
					park.showMe(true);
					var parkMarker = self.markers()[park.id-1];
					parkMarker.setMap(map);
					google.maps.event.trigger(parkMarker, 'click');
					
				} else {
					//hides all park names that were not selected
					park.showMe(false);
				}
			});
		});

		// Sets the map on all markers in the array. 
       self.setVisibility = function(setting) {
        for (var i = 0; i < self.markers().length; i++) {
          self.markers()[i].setMap(setting);
        }
      };
		//when a park name is clicked from the list on the left of the page, 
		//this funcion will trigger the associated marker as if it were clicked
		self.linkToMarker = function(park_obj){
			//hides all markers first
			self.setVisibility(null);


			var parkMarker = self.markers()[park_obj.id-1];
			//click the marker associated with the park name selected
			google.maps.event.trigger(parkMarker, 'click');

			parkMarker.setMap(map);

				

		};

		//resets the list and map when you click on the reset button
		self.resetList = function(){
			
			initMap();
			ko.utils.arrayFilter(self.nationalParks(), function(park){

				park.showMe(true);

			});


	};


	};

	

	var vm = new ViewModel;
	ko.applyBindings(vm);
			
