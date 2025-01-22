import React,{useState} from "react";
import "./headerToggle.css";
import { Link, useLocation  } from "react-router-dom"; 


const ToggleButton = () => 
{
  
const [isToggled, setIsToggled] = useState(false);
const toggleButton = () =>
   {
     setIsToggled(!isToggled);
   };

const location = useLocation(); // Get the current location (route) 
  
 // Function to check if a route is active
const isActive = (path) => location.pathname === path;
 
  return (
    <div className={`toggle-container ${isToggled?"active":""}`}  onClick={toggleButton}>
      <div className={`toggle-circle ${isToggled ? "active" : ""}`}></div>
      
      <span className={`toggle-text ${isToggled?"active":""}`}>{isToggled ?(
        <div className="toggle-links"
         onClick={(e) => e.stopPropagation()}>
          <Link to="/" 
          className={`toggle-link ${isActive("/")?"active":""}`}>Home</Link>
          <Link to="/projects"
          className={`toggle-link ${isActive("/projects")?"active":""}`}>Projects</Link>
          <Link to="/achievements"
          className={`toggle-link ${isActive("/achievements")?"active":""}`}>Achievements</Link>
          <Link to="/experience"
          className={`toggle-link ${isActive("/experience")?"active":""}`}>Experience</Link>
        </div>
      )  :("Why Hire Amit?")}</span>
    </div>
  );
};

export default ToggleButton;
