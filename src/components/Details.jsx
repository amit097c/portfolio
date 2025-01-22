import React from "react";
import "./Details.css";
import { Link} from "react-router-dom"; 
const Details =() =>
 (
            <section id="details" className="details">
               <div className="marquee-container">
                  <div className="marquee">    
                    <div className="marquee-content">                        
                            <div className="projects">
                                <h3>Projects</h3>
                                <p>Explore three distinct projects to see how I can help you.</p>
                                <Link to="/projects" className="button">Learn more</Link>
                            </div>               
                            <div className="testimonials">
                                <h3>Achievements</h3>
                                <p>Multiple winnings in tech as well as public speaking forums</p>
                                <Link to="/achievements" className="button">Learn more</Link>
                            </div>
                            <div className="contact">
                                <h3>Contact</h3>
                                <p>Get in touch and share your problem and get your conceptual solution  </p>
                                <a href="mailto:amit097@yahoo.com" className="button">Email me</a>
                            </div>
                            <div className="projects">
                                <h3>Projects</h3>
                                <p>Explore three distinct projects to see how I can help you.</p>
                                <Link to="/projects" className="button">Learn more</Link>
                            </div>               
                            <div className="testimonials">
                                <h3>Achievements</h3>
                                <p>Multiple winnings in tech as well as public speaking forums</p>
                                <Link to="/achievements" className="button">Learn more</Link>
                            </div>
                            <div className="contact">
                                <h3>Contact</h3>
                                <p>Get in touch and share your problem and get an effective conceptual solution  </p>
                                <a href="mailto:amit097@yahoo.com" className="button">Email me</a>
                            </div>
                            
                    </div>
                 </div>
               </div>
            </section>
        );


export default Details;