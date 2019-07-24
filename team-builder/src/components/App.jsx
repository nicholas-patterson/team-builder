import React, { useState } from "react";
import Form from "./Form";
import TeamCard from "./TeamCard";

const App = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div>
      <Form setTeamMembers={setTeamMembers} teamMembers={teamMembers} />
      <TeamCard teamMembers={teamMembers} />
    </div>
  );
};

export default App;
