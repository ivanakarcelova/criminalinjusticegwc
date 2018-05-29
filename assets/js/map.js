var map;
var Markers = {};
var infowindow;
var locations = [
	[
		'Singapore',
		'<strong>Singapore</strong><br>Born in 1993',
		1.274543, 103.844565,
		0
	],
	[
		'Memphis, Tennessee, United States',
		'<strong>Memphis, Tennessee, United States</strong><br>Raised 1994 to 1998',
		35.144768,
		-90.044086,
		1
	],
	[
		'Cleveland, Ohio, United States',
		'<strong>Cleveland, Ohio, United States</strong><br>Raised from 1999 to 2000',
		41.504457,
		-81.701397,
		2
	],
	[
		'Paris, France',
		'<strong>Paris, France</strong><br>Raised 2000 to 2012 and interned at Christian Dior Couture summer 2014',
		48.78126899999999,
		2.219588599999952,
		3
	],
	[
		'Madrid, Spain',
		'<strong>Madrid, Spain</strong><br>Studied abroad summer 2010',
		40.427635,
		-3.685373,
		4
	],
	[
		'Barcelona, Spain',
		'<strong>Barcelona, Spain</strong><br>Studied abroad summer 2011',
		41.381911,
		2.172800,
		5
	],
	[
		'New York, New York, United States',
		'<strong>New York, New York, United States</strong><br>Studied at New York University, Stern School of Business, from 2012 to 2016',
		40.754826, -73.983114,
		6
	],
	[
		'Buenos Aires, Argentina',
		'<strong>Buenos Aires, Argentina</strong><br>Studied abroad spring 2014',
		-34.586181, -58.405833,
		7
	],
	[
		'Punta Del Este, Uruguay',
		'<strong>Punta Del Este, Uruguay</strong><br>February 2014',
		-34.968612, -54.951013,
		8
	],
	[
		'Chile',
		'<strong>Chile</strong><br>Backpacked alone through country for a week in March 2014',
		-33.464615, -70.676482,
		9
	],
	[
		'Rio de Janeiro, Brazil',
		'<strong>Rio de Janeiro, Brazil</strong><br>April 2014',
		-22.986725, -43.198994,
		10
	],
	[
		'Yucat&aacute;n, Mexico',
		'<strong>Yucat&aacute;n, Mexico</strong><br>Exchange with Yucatecan family in January 2015',
		20.995679, -89.613497,
		11
	],
	[
		'Ho Chi Minh City, Vietnam',
		'<strong>Ho Chi Minh City, Vietnam</strong><br>International Studies Program with NYU Stern in March 2015',
		10.797455, 106.655910,
		12
	],
	[
		'Tunis, Tunisia',
		'<strong>Tunis, Tunisia</strong><br>2005',
		36.804917, 10.165594,
		13
	],
	[
		'Rome, Italy',
		'<strong>Rome, Italy</strong><br>Backpacking in January 2014',
		41.892439, 12.484499,
		14
	],
	[
		'M&ouml;nchengladbach, Germany',
		'<strong>M&ouml;nchengladbach, Germany</strong><br>Touring with Shakira in 2011',
		51.161504, 6.420680,
		15
	],
	[
		'Nice, France',
		'<strong>Nice, France</strong><br>Touring with Shakira in 2011',
		43.701825, 7.253847,
		16
	],
	[
		'Lyon, France',
		'<strong>Lyon, France</strong><br>Touring with Shakira in 2011',
		45.757357, 4.837181,
		17
	],
	[
		'London, United Kingdom',
		'<strong>London, United Kingdon</strong><br>Class trip in 2010 and touring with Shakira in 2011',
		51.508540, -0.123631,
		18
	],
	[
		'Brussels, Belgium',
		'<strong>Brussels, Belgium</strong><br>Harvard Model Congress in 2009',
		50.852791, 4.348299,
		19
	],
	[
		'Bloomington, Indiana, United States',
		'<strong>Bloomington, Indiana, United States</strong><br>Nation Diversity Case Competition at IU Kelley Business School (runner-up behind Wharton)',
		39.159634, -86.531846,
		20
	],
	[
		'Colombia',
		'<strong>Colombia</strong><br>Solitary Backpacking Trip Through Bogota, Medellin, Barranquilla, Tayrona and Cartagena in 2015',
		4.511647, -73.461950,
		21
	],
	[
		'Nicaragua',
		'<strong>Nicaragua</strong><br>Solitary Backpacking Trip Through Managua, Granada, Leon, Masaya, Corn Islands and Ometepe Island in 2017',
		11.933719, -85.957053,
		21
	],
	[
		'Peru',
		'<strong>Peru</strong><br>Backpacking Trip Through Lima, Cusco, Arequipa, Ica and the Amazonian Forest in 2016',
		-12.021126, -77.051003,
		21
	],
	[
		'India',
		'<strong>India</strong><br>Solitary Backpacking Trip Through Mumbai, Bangalore, Chennai, Jaipur, Jodhpur, Agra, Udaipur and Jaisalmer in 2016',
		28.623699, 77.211033,
		21
	],
];
var origin = new google.maps.LatLng(locations[0][2], locations[0][3]);

function initialize() {
  var mapOptions = {
    zoom: 2,
    scrollwheel: false,

    center: origin
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	infowindow = new google.maps.InfoWindow();

    for(i=0; i<locations.length; i++) {
    	var position = new google.maps.LatLng(locations[i][2], locations[i][3]);
		var marker = new google.maps.Marker({
			position: position,
			map: map,
		});
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent(locations[i][1]);
				infowindow.setOptions({maxWidth: 250});
				infowindow.open(map, marker);
			}
		}) (marker, i));
		Markers[locations[i][4]] = marker;
	}

	locate(0);

}

function locate(marker_id) {
	var myMarker = Markers[marker_id];
	var markerPosition = myMarker.getPosition();
	map.setCenter(markerPosition);
	google.maps.event.trigger(myMarker, 'click');
}



google.maps.event.addDomListener(window, 'load', initialize);
 
