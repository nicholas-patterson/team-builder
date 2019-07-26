import React, { useState } from "react";
import styled from "styled-components";

const Cards = styled.div`
  width: 400px;
  border: 1px solid black;
  height: 200px;
  font-size: 15px;
  margin: 0 auto;
  background: #fff;
  text-align: center;
  margin-bottom: 20px;
`;

const TeamCard = ({
  teamMembers,
  memberToEdit,
  setMemberToEdit,
  setisEditing
}) => {
  const team = teamMembers.map((member, index) => {
    return (
      <Cards key={index}>
        <div>
          <h3>{member.name}</h3>
          <h3>{member.email}</h3>
          <h3>{member.role}</h3>
          <button onClick={() => (setMemberToEdit(member), setisEditing(true))}>
            Edit
          </button>
        </div>
      </Cards>
    );
  });
  return (
    <div>
      <h1>{team}</h1>
    </div>
  );
};

export default TeamCard;
