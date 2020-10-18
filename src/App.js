import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import PlaceDetail from './Components/PlaceDetail/PlaceDetail';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import HotelDetails from './Components/HotelDetails/HotelDetails';

export const UserContext= createContext();
export const PlaceContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [place,setPlace] = useState({});

  return (
    <div className="App">
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <PlaceContext.Provider value ={[place,setPlace]}>
    <Router>
     
     <Switch>
           <Route path="/login">
             <Login></Login> 
           </Route>
           <Route path="/home">
           <Header></Header>
           </Route>
           <Route path="/placeDetails/:placeId">
             <PlaceDetail></PlaceDetail>  
           </Route>
           <PrivateRoute path="/hotelDetails">
             <HotelDetails></HotelDetails>
             
             </PrivateRoute>
             
           <Route exact path="/">
              <Header></Header>
           </Route>
           <Route path="*">
              <p>Error</p>
           </Route>
           
       </Switch>
     
   </Router>
      </PlaceContext.Provider>
      </UserContext.Provider>

    </div>

    
  );
}

export default App;
