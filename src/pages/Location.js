import React from "react";
import useGeoLocation from "../hooks/geolocationhook"
const Location =()=>{
  const location = useGeoLocation();
  return (
    <>
    <div> {location.loaded ? JSON.stringify(location): "Location data not available yet."} </div>
    </>
);};
export default Location