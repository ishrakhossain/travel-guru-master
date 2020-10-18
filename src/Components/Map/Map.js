import React, {useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import { PlaceContext } from '../../App';
import fakeData from '../../fakeData/fakeData';


const AnyReactComponent = ({ text }) => <div>{text}</div>;


const Map = () => {

    const [place, setPlace] = useContext(PlaceContext);

    const placeArray = fakeData.filter(plc => parseInt(plc.key) === parseInt(place))
    console.log(place)

    const lattitude = placeArray[0].lat
    const longitude = placeArray[0].lng
    
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '70%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDixoOe6wrfAs7rvOl0NroxnRfauUFMakU' }}
          defaultCenter={{lat:parseInt(lattitude),lng:parseInt(longitude)}}
          defaultZoom={10}
        >
          <AnyReactComponent
            lat={parseInt(lattitude)}
            lng={parseInt(longitude)}
            text="Here"
          />
        </GoogleMapReact>
      </div>
    );

}

export default Map;