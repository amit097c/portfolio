import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";
import Header1 from "../components/Header1";
import Footer from "../components/Footer";

const Projects = () => {
  const projects = [
    { id: 1, name: "Sentiment Analysis of Banking Services",link:'http://34.67.239.231:8000/?bank=CIBC', github:'https://github.com/amit097c/BankReviewSentimentAnalysis',thumbnail: "banksense.png", details: "Analyzed 170,000+ customer reviews from top Canadian banks  using NLP,achieving 87% sentiment classification accuracy across positive, negative, and neutral sentiments; Developed a GCP-based data pipeline to automate scraping, preprocessing, and sentiment labeling, cutting manual effort by 80% and enabling biweekly batch updates; Built a Django-based Sentiment Dashboard with visualizations, boosting decision-making efficiency by 40%" },
    { id: 2, name: "Web Search Engine", link:'http://34.67.239.231:8000/?bank=CIBC',github:'https://github.com/amit097c/search_engine_backend', thumbnail: "search-engine.png", details: "Enhanced query response time by 30% using a trie-based inverted index, achieving 20-50% faster performance than hash map, and reduced irrelevant results using edit distance matching and heap-based ranking for 1,000 queries;Achieved retrieval speed by 30% and reduced redundant scraped web links by storing them in a directed graph" },
    { id: 3, name: "Client Server File Retrieval Communication System",link:'http://34.67.239.231:8000/?bank=CIBC', github:'https://github.com/amit097c/Client-Server-File-Retrival-System', thumbnail: "client-server.jpg", details: "Implemented efficient, fault-tolerant handling of 10+ multi-client interactions by architecting a Linux-based client-server file retrieval system in C, utilizing socket communication and round-robin load balancing between main and mirror servers;Reduced manual intervention time by 67% per session by Implementing a multi-threaded architecture on a single server to handle 15+ client connections, alongside using shell scripting bash utilities for automated backup processes" },
    { id: 4, name: "EasyGo: Fare Payment System",link:'http://34.67.239.231:8000/?bank=CIBC', github:'https://github.com/amit097c/easygo', thumbnail: "easygo.jpg", details: "Awarded a $500 cash prize in EPICentre’s VentureU Competition for developing a prototype fare payment software implemented face recognition using Python and OpenCV" },
    { id: 5, name: "EWaste Management System",link:'http://34.67.239.231:8000/?bank=CIBC', github:'https://github.com/amit097c/e_waste_network', thumbnail: "ewaste.png", details: "Developed a Python Django-based platform for e-waste recycling, implementing user authentication and request management features that enabled the creation of more than 50+ user accounts during testing phases;Engineered user-centric interfaces and backend logic, utilizing Django’s function and class-based views for better code organization and integrating session and cookie tracking with advanced caching techniques"},
    { id: 6, name: "Brick Breaker Game", link:'http://34.67.239.231:8000/?bank=CIBC', github:'https://github.com/amit097c/BRICK-BREAKER-GAME',thumbnail: "BrickBreaker.jpg", details: "Showcased strong logic-building, function calling, and control flow design skills;Implemented a dynamic ball trajectory, brick collision mechanism, and a user-controlled paddle for a classic gaming experience.Demonstrated programming proficiency, algorithmic thinking, and problem-solving abilities through game development" },
    { id: 7, name: "Trackline Solutions",link:'https://trackline-sols.web.app/',github:'https://github.com/amit097c/trackline-solutions-web',  thumbnail: "ts.jpg", details: "Fleet management and tracking system that enhances operational efficiency for fleet managers implemented using React Javascript; Integrated real-time vehicle and user management, trip tracking, route optimization; Streamlining operations, reducing costs, and improving decision-making; credentials; username: ramish21@uwindsor.ca password:1234567890​" },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const currentIndexRef = useRef(-1); // Track the current index

  useEffect(() => 
    {
       const index = projects.findIndex((project) => project.id === selectedProject.id);
       if (index !== -1)
         {
           currentIndexRef.current = index;
         } 
      else 
       {
        console.error("Selected project not found in projects array");
       } 
   }, [selectedProject, projects]);
  useEffect(()=>
    {
      if (!isHovered)
       {
         const interval = setInterval(()=>
          {
            setSelectedProject((currentProject)=>
             {
               const currentIndex = currentIndexRef.current;//projects.indexOf(currentProject);
               console.log("currentIndex: ",currentIndex);
               const nextIndex = (currentIndex + 1) % projects.length;
               return projects[nextIndex];
             });
          },5000);
         return () => clearInterval(interval); // Cleanup on unmount
       }    
      },[isHovered,projects.length]);
  
  const handleThumbnailClick = (project) => {
    setSelectedProject(project);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="projects-page">
     
      {/* Header Section */}
       <Header1 />  
       <h3>From Survival to Innovation:</h3>
       <div className="video">
       
           <video width="20%" loop muted autoPlay>
                <source src="pb2-.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <span className="arrow">→</span>
            <video width="20%" loop muted autoPlay>
                <source src="pb3-.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <span className="arrow">→</span>
            <video width="25%" loop muted autoPlay>
                <source src="pb4-.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
        </div>
        <div className="section-description">
          
          <p>
              I turn what I've learned into practical solutions, creating tools that tackle real-world challenges, just like humans have always done to survive and thrive.
         </p>
        </div>

      {/* Hero Section */}
      <section className="projects-hero">
        <h1 className="section-title-h1">Projects</h1>
        <p className="section-description">
          A showcase of some of the exciting tools I've worked on, featuring innovative solutions and creative designs.
        </p>
       
        <button className="btn btn-primary" onClick={toggleModal}>
          Show Projects
        </button>

      </section>

       {/* Modal */}
       {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
      <button className="modal-close-button" onClick={toggleModal}>
        ×
      </button>
          <section className="projects-content">
              <div className="project-details">
                <h2>{selectedProject.name}</h2>
                {/* <p>{selectedProject.details}</p> */}
                   <ul className="project-details-list">
                      {selectedProject.details.split(";").map((detail, index) => 
                      (
                        <li key={index}>{detail.trim()}</li> // Trim spaces around each sentence
                      ))}
                   </ul>
                <div className="btn-container">
                  <button className="btn btn-live"   onClick={() => window.open(selectedProject.link, '_blank')}>
                    Live
                  </button>
                  
                  {/* <button className="btn btn-details">Details</button>
                  <button className="btn btn-feedback">Feedback</button> */}
                  
                  <button className="btn btn-github" onClick={() => window.open(selectedProject.github, '_blank')}>GitHub</button>
                 
                </div>
              </div>
              <div className="project-thumbnail-container">
                <img src={selectedProject.thumbnail} alt={selectedProject.name} className="project-thumbnail" />
              </div>
            </section>

            <section className="projects-carousel">
              <div className="carousel">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className={`carousel-item ${project.id === selectedProject.id ? "active" : ""}`}
                    onClick={() => handleThumbnailClick(project)}
                    onMouseEnter={() => setIsHovered(true)} // Pause on hover
                    onMouseLeave={() => setIsHovered(false)} // Resume on leave
                  >
                    <img src={project.thumbnail} alt={project.name} className="carousel-thumbnail" />
                  </div>
                ))}
              </div>
            </section>

            <button className="btn btn-close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
        
      )}
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Projects;
