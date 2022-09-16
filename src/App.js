import SideBar from "./components/SideBar";
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import System from "./pages/System"
import Home from "./components/Home";
import Setup from "./pages/Setup";
import ContactUs from "./pages/ContactUs";
import Monitoring from "./pages/Monitoring";
import Logout from"./pages/Logout";
import ManualJoystick from "./components/ManualJoystick";
import PositionMarker from "./components/PositionMarker";
function App() {
  return (
    <div>
  
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/monitoring" element={<Monitoring />} /> 
          <Route path="/system" element={<System />} /> 
          <Route path="/logout" element={<Logout />} /> 
          <Route path="Help/ContactUs" element={<ContactUs />} />
          <Route path="Dashboards/DefaultDashboard" element={<Home />} />
          <Route path="/Joystick" element={<ManualJoystick />} />
           <Route path="Setup/PositionMarker" element={<Setup />} /> 
          <Route path="/SideBar" element={<SideBar />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
      </Router>

      </div>
  );
}

export default App;
