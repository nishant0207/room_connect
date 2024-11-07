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
          name="Karan Verma"
          position="Full Stack Developer"
          imageSrc="https://media.licdn.com/dms/image/v2/D5635AQHqI8eVqe4W7A/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1724268480656?e=1731610800&v=beta&t=nR67FF_j_Pxsrnyy86v9FGtrfaar3goZpwhMhOR4LC8"
          linkedin = "https://www.linkedin.com/in/karan-verma-1b482b225/"
          github="https://github.com/Albert070110"
        />
      </div>
    </div>
  );
}

export default About;
