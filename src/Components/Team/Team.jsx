// TeamPage.js
import React from "react";
import TeamMembers from "./TeamMembers";
import "./Team.scss";

const Team = () => {
  return (
    <div className="team-page">
      <h2>Our Team</h2>
      <div className="team-members">
        <TeamMembers
          name="Aliu Musa"
          role="Co-Founder, CEO"
          image="/src/assets/aliumusa.jpeg"
          x="https://twitter.com/herlew99"
          linkedin="https://www.linkedin.com/in/aliumusa/"
        />
        <TeamMembers
          name="Abdullahi Raji"
          role="Co-Founder, CTO"
          image="/src/assets/IMG_20220206_143138_235.jpg"
          x="https://twitter.com/alAmeer170"
          linkedin="https://www.linkedin.com/in/raji-abdullahi-a-4598b42a5/"
        />
        <TeamMembers
          name="Abdulakeem Adebayo"
          role="Blockchain Dev."
          image="/src/assets/bayo.png"
          x="https://twitter.com/AkeemAd28605307"
          linkedin="https://www.linkedin.com/in/adebayo-ademola-678530199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        />
        <TeamMembers
          name="Abubakar Kehinde"
          role="Project Lead"
          image="/src/assets/kenny.jpeg"
          x="https://twitter.com/kennySpec"
          linkedin="https://www.linkedin.com/in/kehinde-abubakar-029223252/"
        />
        <TeamMembers
          name="Rokeebah Olajide"
          role="Marketing Lead"
          image="/src/assets/roqeebah.png"
          x="https://twitter.com/Olabimpe963"
          linkedin="https://www.linkedin.com/in/olajide-rokeebat-98507329a/"
        />
      </div>
    </div>
  );
};

export default Team;
