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
{/*       <div className="row">
        <TeamInfo 
          name="Nishant Dalal"
          position="Frontend"
          imageSrc="https://media.licdn.com/dms/image/D5603AQFh1ghieGVbXw/profile-displayphoto-shrink_800_800/0/1695741941537?e=1718841600&v=beta&t=IaNhFaPl6MOzTNjvyfJSpA20gZW3yrGwRGgCit_suGI"
          linkedin = "https://www.linkedin.com/in/nishant-dalal-70274012a/"
          github="https://github.com/nishant0207"
        />
        <TeamInfo 
          name="Gyanoday Kothari"
          position="Backend"
          imageSrc="https://media.licdn.com/dms/image/D5603AQHuZ20b9Zcv0w/profile-displayphoto-shrink_400_400/0/1667813086317?e=1718841600&v=beta&t=SXWCjakA1M-ainSkBIpUi356osZ3T1yBgnFAjWz9gnM"
          linkedin = "https://www.linkedin.com/in/gyanoday06/"
          github="https://github.com/gyanoday06"
        /> */}
        <TeamInfo 
          name="Dev Rana"
          position="Management"
          imageSrc="data:image/jpeg;base64,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"
          linkedin=""
          github=""
        />
      </div>
    </div>
  );
}

export default About;
