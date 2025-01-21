import React from "react";
import "./Achievements.css";

const Achievements =() =>
     {
        const achivements=[
            {id: 1, title:"Achievement 1", description:"description 1",image: "/assets/images/photo.JPG" },
            {id: 2, title:"Achievement 2", description:"description 1",image: "/assets/images/photo.JPG"}
        ];
        return (
            <section id="Achievement" className="achivement-section">
                <h2>Achievement</h2>
                <div className="achievement-grid">
                    {achivements.map((achivement)=>
                        (
                            <div key={achivement.id} className="achievement-card">
                                <img src={achivement.image} alt="achievement.title"></img>
                                <h3>{achivement.title}</h3>
                                <p>{achivement.description}</p>
                            </div>  
                        ))}
                </div>
            </section>
        );
     };

export default Achievements;
    