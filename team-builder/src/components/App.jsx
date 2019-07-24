import React, { useState } from "react";
import Form from "./Form";
import TeamCard from "./TeamCard";

const App = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState([]);
  console.log(memberToEdit);

  return (
    <div>
      <Form
        setTeamMembers={setTeamMembers}
        teamMembers={teamMembers}
        memberToEdit={memberToEdit}
      />
      <TeamCard teamMembers={teamMembers} setMemberToEdit={setMemberToEdit} />
    </div>
  );
};

export default App;
