import React, { useState } from "react";
import Form from "./Form";
import TeamCard from "./TeamCard";

const App = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState([]);
  const [isEditing, setisEditing] = useState(false);
  return (
    <div>
      <Form
        setTeamMembers={setTeamMembers}
        teamMembers={teamMembers}
        memberToEdit={memberToEdit}
        isEditing={isEditing}
        setisEditing={setisEditing}
        setMemberToEdit={setMemberToEdit}
      />
      <TeamCard
        teamMembers={teamMembers}
        setMemberToEdit={setMemberToEdit}
        setisEditing={setisEditing}
      />
    </div>
  );
};

export default App;
