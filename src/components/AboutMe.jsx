import React from "react";
import "./AboutMe.css";

const AboutMe = () => 
    {
        return (
           
            <section className="hero">
                <div className="hero-content">

                    <div className="badge">
                        <span> Open To Work</span>
                    </div>
                    <h1 className="headline">ALL-IN-ONE <br/>Software Engineer</h1>
                  
                    <div className="se_images">
                        <div className="image-item">
                            <img src="/portfolio/b1.png" alt="Image1" />
                            <p className="description">Customer wants something = Customer has a problem</p>
                        </div>
                        <div className="image-item">
                            <img src="/portfolio/b2.png" alt="Image2" />
                            <p className="description">Analyze it to get what he needs</p>
                            
                        </div>
                        <div className="image-item">
                            <img src="/portfolio/b3.jpg" alt="Image3" />
                            <p className="description">Define tools, process, methodology</p>
                            
                        </div>
                        <div className="image-item">
                            <img src="/portfolio/b4.jpg" alt="Image4" />
                            <p className="description">Define mathematically the product</p>
                            
                        </div>
                        <div className="image-item">
                            <img src="/portfolio/b5.png" alt="Image5" width="110" />
                            <p className="description">Implement it and program it</p>
                            
                        </div>
                    </div>
                </div>

                    {/* <div className="hero-image">                        
                        <img src="practice.gif?cacheBuster=123" alt="Amit's Profile Picture"/>
                    </div> */}
                            {/* Embedding the iframe */}
                            <video width="40%" loop muted autoPlay>
                <source src="/portfolio/pb1-.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

                <div/>
                
            </section>
        )
    }
export default AboutMe;    