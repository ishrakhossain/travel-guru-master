import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import './HotelDetails.css'
import room1 from '../../images/location/room1.png';
import room2 from '../../images/location/room2.png';
import room3 from '../../images/location/room3.png';
import Map from '../Map/Map';
import fakeData from '../../fakeData/fakeData';
import hotelData from '../../hotelData/hotelData'
import HotelRooms from '../HotelRooms/HotelRooms';
import { PlaceContext } from '../../App';


const HotelDetails = () => {

    
    const [place,setPlace] = useContext(PlaceContext);

    const placeArray = fakeData.filter(plc => parseInt(plc.key) === parseInt(place))

    console.log(placeArray)

    
    return (
        <section className="row book-room">
             <div style={{ width:'80%',  margin:'auto'}}>
             <NavBar></NavBar>
            <hr></hr>

             <h1 style={{textAlign:'left'}}>Stays in {placeArray[0].name}</h1>

            <div className="row room-details">
                <div className="col-6 col--md-6">
                {
                    hotelData.map((hotel=> <HotelRooms hotel={hotel}></HotelRooms>))
                }
                </div>

                
                <div className="col-6 col-md-6" style={{ height: '400px', width: '100%' }}>
                <Map></Map>
                </div>
                
                
            </div>
            <hr></hr>

             </div>
           
            
        </section>
    );
};

export default HotelDetails;