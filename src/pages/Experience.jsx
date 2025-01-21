import React from "react";
import "./Experience.css";
import Header1 from "../components/Header1";
import Footer from "../components/Footer";

const Experience = () => {
  return (
    <div className="experience-page">
      {/* Header Section */}
      <Header1 />
      <h3>Professional Experience</h3>
      <div className="experience-container">
        {/* Left Column */}
        <div className="left-column">
          <div className="visualization">
            <img
              src="Cognizant_Logo.jpg"
              alt="Density Plot"
              className="visualization-image"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
      
          <p><strong>Role:</strong> Associate Software Engineer</p>

          <ul className="experience-details">
            <li>Enhanced scalability of object-oriented systems by designing and deploying over 15 REST APIs.</li>
            <li>Ensured security with Spring Security and custom JWT-based user authentication.</li>
            <li>Eliminated single points of failure across AWS cloud-based distributed systems by developing 5+ unique microservices in Spring Boot and integrating data acquisition functionalities.</li>
            <li>Increased test coverage by 40% and reduced manual testing time.</li>
          </ul>
          <div className="skills">
            <h2>Technologies:</h2>
            <p>Java, Spring Boot, Selenium, TypeScript, Angular, AWS, SQL</p>
          </div>
          <div className="tech-logos">
          <img src="java.png" alt="Logo java" className="t_logo"/>
          <img src="spring-boot.png" alt="Logo springboot" className="t_logo"/>
          <img src="selenium.png" alt="Logo selenium" className="t_logo"/>
          
          <img src="typescript.png" alt="Logo typescript" className="t_logo"/>
          <img src="angular.png" alt="Logo angular" className="t_logo"/>
          <img src="aws.png" alt="Logo aws" className="t_logo"/>  
          <img src="sql.png" alt="Logo sql" className="t_logo"/>
         
          
           
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Experience;
