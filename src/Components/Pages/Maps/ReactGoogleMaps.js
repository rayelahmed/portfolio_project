import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const ReactGoogleMaps = (props) => {
  const style = {
    width: "80%",
    height: "80%",
    margin: "auto",
    position: "relative",
  };
  return (
    <div className="mt-40">
      <Map style={style} google={props.google} zoom={14}>
        <Marker name={"Current location"} />

        <InfoWindow></InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyArc_K9zGRPbH5KtJujqxDrNM48FGK5T3s",
})(ReactGoogleMaps);
