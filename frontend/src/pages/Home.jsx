import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../component/Spinner";
import { Link } from "react-router-dom";
import "./home.css"

const Home = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  <Spinner />;
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/companies")
      .then((res) => {
        console.log(res.data);
        setCompanies(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="main-div">
      <div className="flex-ot">
        <h1 className="">Company List</h1>
        <Link to="/companies/create">
          <button className="btn">Add</button>
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex-in">
          <div className="flex-up">
            {companies.map((company) => {
              return (
                <div key={company._id} className="flex-co">
                  <div className="flex-content">
                    <h3 className=" h1">Name:</h3>
                    <p>
                      {company.name}
                    </p>
                  </div>
                  <div className="flex-content">
                    <h3 className=" h1 ">Owner:</h3>
                    <p>
                      {company.owner}
                    </p>
                  </div>
                  <div className="flex-content">
                    <h3 className=" h1 ">Location:</h3>
                    <p>
                      {company.location}
                    </p>
                  </div>
                  <div className="flex-content">
                    <h3 className=" h1 ">Employees:</h3>
                    <p>
                      {company.empNum}
                    </p>
                  </div>
                  <div className="flex-content">
                    <h3 className=" h1 ">Contact:</h3>
                    <p>
                      {company.contact}
                    </p>
                  </div>

                  <div className="flex-cont">
                    <h3 className=" h1 ">Description:</h3>
                    <p>
                      {company.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
