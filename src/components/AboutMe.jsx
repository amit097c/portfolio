import React from "react";
import "./AboutMe.css";
import ReactPlayer from "react-player";
const AboutMe = () => 
    {
        return (
            <section className="hero">
                <div className="hero-content">

                    <div className="badge">
                        <span> Open To Work</span>
                    </div>
                    <h1 className="headline">ALL-IN-ONE Software Engineer</h1>
                    
                   
                    <div className="se_images">
                        <div className="image-item">
                            <img src="b1.png" alt="Image 1" />
                            <p className="description">Customer wants something = Customer has a problem</p>
                        </div>
                        <div className="image-item">
                            <img src="b2.png" alt="Image 2" />
                            <p className="description">Analyze it to get what he needs</p>
                            
                        </div>
                        <div className="image-item">
                            <img src="b3.jpg" alt="Image 3" />
                            <p className="description">Define tools, process, methodology</p>
                            
                        </div>
                        <div className="image-item">
                            <img src="b4.jpg" alt="Image 4" />
                            <p className="description">Define mathematically the product</p>
                            
                        </div>
                        <div className="image-item">
                            <img src="b5.png" alt="Image 5" width="110" />
                            <p className="description">Implement it and program it</p>
                            
                        </div>
                    </div>
                </div>

                    {/* <div className="hero-image">                        
                        <img src="practice.gif?cacheBuster=123" alt="Amit's Profile Picture"/>
                    </div> */}
                            {/* Embedding the iframe */}
                            <video width="40%" loop muted autoPlay>
                <source src="pb1-.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

                <div/>
            </section>
        )
    }
export default AboutMe;    