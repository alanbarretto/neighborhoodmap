
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

		parks.forEach(function(data){
			self.nationalParks.push(new Parks(data));
		});


		self.selection.subscribe(function(newValue){
			for (var i=0; i<parks.length;i++){
				if (parks[i].title == newValue){
					var parkMarker = self.markers()[parks[i].id-1];

					google.maps.event.trigger(parkMarker, 'click');
				}
			}
			
		})

		self.linkToMarker = function(park_obj){


				var parkMarker = self.markers()[park_obj.id-1];

				google.maps.event.trigger(parkMarker, 'click');

				

		};
		

	};

	

	var vm = new ViewModel;
	ko.applyBindings(vm);
			
