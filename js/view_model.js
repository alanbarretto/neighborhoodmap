
    var Parks = function(data){
    	this.title = data.title;
    	this.location = data.location;
    	this.weather = data.weather;
    	this.id = data.id;

    }



	function ViewModel(){

		
		var self = this;

		self.selection = ko.observable();

		self.markers = ko.observableArray([]);

		self.nationalParks = ko.observableArray([]);

		//push each parks object into the nationalParks observable array
		parks.forEach(function(data){
			self.nationalParks.push(new Parks(data));
		});

		//when a selection is clicked from the dropdown menu, this function
		//will trigger the marker associated with it as if the marker was clicked
		self.selection.subscribe(function(newValue){
			for (var i=0; i<parks.length;i++){
				if (parks[i].title == newValue){
					var parkMarker = self.markers()[parks[i].id-1];

					google.maps.event.trigger(parkMarker, 'click');
				}
			}
			
		})
		//when a park name is clicked from the list on the left of the page, 
		//this funcion will trigger the associated marker as if it were clicked
		self.linkToMarker = function(park_obj){


				var parkMarker = self.markers()[park_obj.id-1];

				google.maps.event.trigger(parkMarker, 'click');

				

		};
		

	};

	

	var vm = new ViewModel;
	ko.applyBindings(vm);
			