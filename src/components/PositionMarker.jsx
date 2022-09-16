import Robot from "../components/Robot";
import Map from "../components/Map";
import ParamScreen from "../components/ParamScreen";
import "../Css/DefaultDashboard.css";
import styled from "styled-components";

const PositionMarker = (props) => {
  return (
    <div>
      <span className="paramscreen">
        {" "}
        <ParamScreen ros={props.ros} />
      </span>
      <span className="map">
        {" "}
        <Map ros={props.ros} />
      </span>
    </div>
  );
};

export default PositionMarker;
