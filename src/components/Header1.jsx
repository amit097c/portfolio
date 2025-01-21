import React from "react";
import './Header.css'
import ToggleButton from './headerToggle.jsx'

/*****defined header compoenent*****/
const Header1 =() => 
 (
    <header className="header">
        <div className="branding">
            <h1> Software Engineer</h1>
            <h3>Hi, I'm Amit 👋</h3>
            <p> Software Engineer & Problem Solver | Master of Applied Computing
                    Graduate</p>
        </div>

        <ToggleButton />
        {/* <nav>
            <ul className="nav-list">
                <li><a href="/">Why Hire?</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/achievements">Achievements</a></li>
            </ul>
        </nav> */}

        </header>
        );

 export default Header1;