import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackButton from "../component/BackButton";
import Spinner from "../component/Spinner";

import "./CreateComp.css";

const CreateComp = () => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [empNum, setEmpNum] = useState();
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveCompany = () => {
    const data = {
      name,
      owner,
      location,
      empNum,
      contact,
      description,
    };
    setLoading(true);
    axios
      .post("http://localhost:8000/companies", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <div className="flex-out">
      <BackButton />
      <h1 className="text h1 marginy">Make Company</h1>
      {loading ? <Spinner /> : ""}
      <div>
        <div className="marginy">
          <label className="label">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
        </div>
        <div className="marginy">
          <label className="label">Owner</label>
          <input
            type="text"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            className="input"
          />
        </div>
        <div className="marginy">
          <label className="label">location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input"
          />
        </div>
        <div className="marginy">
          <label className="label">Employees</label>
          <input
            type="number"
            value={empNum}
            onChange={(e) => setEmpNum(e.target.value)}
            className="input"
          />
        </div>
        <div className="marginy">
          <label className="label">contact</label>
          <input
            type="email"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="input"
          />
        </div>
        <div className="marginy">
          <label className="label">Description</label>
          <textarea
            cols="30"
            rows="10"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input"
          />
        </div>
        <button className="btn" onClick={handleSaveCompany}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateComp;
