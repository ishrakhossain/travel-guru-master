import React from 'react';
import star from '../../images/Icon/star_1_.png'
import './HotelRooms.css'

const HotelRooms = (props) => {

    const {title,capacity,type,cancellation,rating,rate,img} = props.hotel


    return (
        <section >
            
             <div className="row room-details" >
                    <div className="col-6"> 
                    <img className="img-fluid room" src={img} alt='hotel-room'></img> 
                    </div>
                    <div className="col-6"> 
                    <h4>{title}</h4>
                    <p>{capacity}</p>
                    <p>{type}</p>
                    <p>{cancellation}</p>
                    <p><img src={star} alt='star'></img> {rating}(20) | ${rate}/night</p>
                    </div> 
                </div>
               
            
        </section>
    );
};

export default HotelRooms;