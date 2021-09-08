import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken='';

// Sample data 
const data = [
{
  "location": "Musée Arthur Rimbaud, 7 quai Arthur Rimbaud",
  "city": "Charleville-Mezière",
  "state": "France",
  "coordinates": [4.726096,49.762085],
},
{
  "location": "Tribunal judiciaire",
  "city": "Charleville-Mezière",
  "state": "France",
  "coordinates": [4.721555,49.760994],
},
 {
   "location": "Lycée Vauban, 15 rue André Bouzy",
   "city": "Givet",
   "state": "France",
   "coordinates": [4.816667,50.133333],
 }
]

class Mapp extends React.Component{

	// Set up states for updating map 
	constructor(props){
		super(props);
		this.state = {
			lng: 4.633333,
			lat: 49.933333,
			zoom: 9
		}
	}

	// Create map and lay over markers
	componentDidMount(){
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/streets-v11', 
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		})

		data.forEach((location) => {
			console.log(location)
			// eslint-disable-next-line no-unused-vars
			var marker = new mapboxgl.Marker()
							.setLngLat(location.coordinates)
							.setPopup(new mapboxgl.Popup({ offset: 30 })
							.setHTML('<h4>' + location.city + '</h4>' + location.location))
							.addTo(map);

		})
	}

	render(){
		return(
			<div>
				<div ref={el => this.mapContainer = el} style={{width:'100%', height:'100vh'}}/>
			</div>
		)
	}
}

export default Mapp;