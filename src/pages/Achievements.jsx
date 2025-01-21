import React from "react";
import "./Achievements.css";
import Header1 from "../components/Header1";
import Footer from "../components/Footer";

const Achievements = () => {
  const achievements = [
    {
      title: "Winner of EPICentre’s VentureU Competition Prize",
      date: "Oct 2023",
      project: "EasyGo - Fare Payment Application",
      technologies: "Python, JavaScript, OpenCV, Firebase",
      description: `
        Awarded a $500 cash prize in EPICentre’s VentureU Competition for developing 
        a prototype fare payment software that implemented face recognition using Python and OpenCV.
      `,
      note: "Showcasing my technical and community engagement skills.",
      image: "v1.jpg"
    },
    {
      title: "CS Demo Day 2024",
      date: "Dec 2023",
      project: "EasyGo - Fare Payment Application",
      technologies: "Python, JavaScript, OpenCV, Firebase",
      description: `
       Delivered and pitched the Most Viable Product (MVP) to stakeholder, by establishing the solution's premise based on customer feedback, including proof of concept, and establishing credibility by building the prototype financial payment system using face detection.
      `,
      note: ".",
      image: "v2.jpg"
    },
    {
      title: "CS Demo Day 2025",
      date: "Jan 2025",
      project: "Sentiment Analysis of Canadian Banking Services",
      technologies: "Python, Django, RoBERTa,Logistic Regression, SVM, Data Scraping, JSON, SQLite, GCP, Data Pipelines",
      description: `
       This project leveraged machine learning models to streamline decision-making for customers by automating the analysis of 170,000+ reviews from major Canadian banks (CIBC, Scotiabank, TD, RBC, BMO). Using NLP, it achieved 87% sentiment classification accuracy, categorizing reviews into positive, negative, and neutral sentiments. A GCP-based data pipeline was developed to automate scraping, preprocessing, and sentiment labeling, reducing manual effort by 80% and allowing for biweekly updates. Additionally, a Django-based Sentiment Dashboard with visualizations improved decision-making efficiency by 40%, saving valuable time for customers
      `,
      note: ".",
      image: "v3.jpg"
    },
    {
      title: "Multiple Winnings in Model United Nations",
      date: "Jan 2017",
      project: "Model United Nations (MUN)",
      technologies: "",
      description: `
      Model United Nations (MUN) taught me to tackle real-world issues, collaborate effectively, and find practical solutions. With multiple wins, I bring strong problem-solving skills and a knack for building consensus, fostering teamwork, and driving meaningful change.
      `,
      note: ".",
      image: "mun.png"
    },

  ];

  return (
    <div className="achievements-page">
      {/* Header */}
      <Header1 />

      {/* Hero Section */}
      <section className="achievements-hero">
      <div className="hero-content">
      <div className="hero-text">
        <h1 className="section-title">Achievements</h1>
        <p className="section-description">
          Milestones that highlight my technical prowess and community impact.
        </p>
     </div>
          <div className="hero-image">
              <img src='exp1.jpg' alt="Achievement Image" />
          </div>
       </div>
      </section>

      {/* Achievements Content */}
      <section className="achievements-content">
        {achievements.map((achievement, index) => (
          <div className="achievement-card" key={index}>
             <div className="achievement-card-content">
             <div className="achievement-description">
                <div className="achievement-header">
                  <h2>{achievement.title}</h2>
                  
                </div>
                <p className="achievement-project">{achievement.project}</p>
                <p className="achievement-technologies">
                {achievement.technologies && (
  <p>
    <strong>Technologies:</strong> {achievement.technologies}
  </p>
)}
                </p>
                <p className="achievement-description-text">{achievement.description}</p>
                <p className="achievement-note">{achievement.note}</p>
               </div>  
               <div className="achievement-image">
                <img src={achievement.image} alt={achievement.title} />
              </div>
              </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Achievements;
