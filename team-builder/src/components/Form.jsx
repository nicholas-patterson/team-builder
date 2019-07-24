import React, { useState, useEffect } from "react";
import "../../src/styles.css";

const Form = props => {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  const handleChange = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.setTeamMembers([...props.teamMembers, member]);
    setMember({ name: "", email: "", role: "" });
  };
  console.log(props);
  useEffect(() => {
    setMember(props.memberToEdit);
  }, [props.memberToEdit]);

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Member Info</legend>
        <div className="form-group row">
          <label htmlFor="username" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
              placeholder="Enter Your Name"
              value={member.name}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Member Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleChange}
            value={member.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Member Role</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Member Role"
            name="role"
            onChange={handleChange}
            value={member.role}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
