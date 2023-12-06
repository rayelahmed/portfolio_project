import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const ReactMaps = (props) => {
  return (
    <div>
      <Map google={props.google} zoom={14}>
        <Marker name={"Current location"} />

        <InfoWindow></InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyArc_K9zGRPbH5KtJujqxDrNM48FGK5T3s",
})(ReactMaps);
