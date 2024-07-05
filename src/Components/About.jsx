import React from 'react';
import './About.css';
import TeamInfo from './TeamInfo';

const About = () => {
  return (
    <div>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Welcome to our project, the RoomMate Finder!</p>
        <p>We're here to simplify the roommate search process for university students. Whether you need a roommate for a room, apartment, or house, our platform connects you with compatible matches based on your preferences.

List your available room or search for rooms based on location, budget, and more. Our mission is to make finding roommates and accommodation easier, so you can enjoy a smooth transition to university life.</p>
      </div>
      <div className="row">
        <TeamInfo 
          name="Nishant Dalal"
          position="Frontend"
          imageSrc="https://media.licdn.com/dms/image/D5603AQH4gjtEo0BgeA/profile-displayphoto-shrink_800_800/0/1719017907898?e=1725494400&v=beta&t=PEfdTrXAYxlU9FYnCkn9BEcsvxBBeubR1extS8xUepU"
          linkedin = "www.linkedin.com/in/ndalal0207"
          github="https://github.com/nishant0207"
        />
      </div>
    </div>
  );
}

export default About;
