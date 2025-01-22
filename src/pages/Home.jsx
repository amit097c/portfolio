import React from "react";
import Header1 from "../components/Header1";
import AboutMe from "../components/AboutMe";
import Details from "../components/Details";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
   
      {/* Header Section */}
      <Header1 />
      
      <AboutMe />
     
      {/* About Me Section */}
      
        <Details />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
