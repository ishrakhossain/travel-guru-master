import React, { useContext, useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import NavBarDark from '../NavBarDark/NavBarDark';
import TimePicker from '../TimePicker/TimePicker';
import Cox from '../../images/location/Cox.png';
import './PlaceDetail.css'
import { PlaceContext } from '../../App';


const PlaceDetail = () => {

    const {placeId} = useParams()
   
    // console.log(fakeData)
    const [place,setPlace] = useContext(PlaceContext);

    setPlace(placeId);


    const [selectedPlaces,setSelectedPlaces]=useState({})
    const {name, description}=selectedPlaces

    useEffect(()=>{
        const filteredPlace = fakeData.find(place => place.key == placeId )
        setSelectedPlaces(filteredPlace);
        console.log(filteredPlace)

    },[placeId])


    return (

        <section className="bg-darker" >
            <div style={{ width:'80%',  margin:'auto'}}>
            <NavBarDark></NavBarDark>
            <div className="row detail" >
                <div className="col-md-6 col-sm-12 ">
                    <h1 style={{color: 'white',textTransform: 'uppercase'}} >{name}</h1>
                    <p style={{color: 'white'}} >{description}</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="booking-card">
                        <Form className="form">
                            <Form.Group>
                                <Form.Label style={{color:'grey'}}>Origin</Form.Label>
                                <Form.Control style={{fontWeight:'bold', color:'black'}} value="Dhaka" type="origin"/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label style={{color:'grey'}}>Destination</Form.Label>
                                <Form.Control style={{fontWeight:'bold', color:'black'}} value={name} type="origin"  />
                            </Form.Group>
                            <TimePicker></TimePicker>                  
                            <Link to='/hotelDetails'>
                            <button className="yellow-btn" type="submit">
                                Start Booking
                            </button>
                            </Link>
                        </Form>
                    </div>
                </div>
            </div>

            </div>
           
        </section>
    );
};

export default PlaceDetail;