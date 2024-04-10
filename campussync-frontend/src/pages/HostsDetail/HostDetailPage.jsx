import React, { useState,useEffect } from "react";
import HostDetailCard from "./HostDetailCard";
import axios from "axios";
import "./HostDetail.css";
import IndividualEvents from "./IndividualEvents";
import { useParams } from "react-router-dom";

const HostDetailPage = () => {
  const { id1 } = useParams();
  const [choic, setChoic] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://natty.pythonanywhere.com/user/hosts/${id1}/`
        );
        console.log(response.data);
        //  response.data.date_posted = response.data.date_posted.slice(0, 10);
        setChoic(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);
  return (
    <div className="host-detail-page">
      <div className="host-detail-content">
        {choic ? <HostDetailCard item2={choic} /> : <p>Loading...</p>}
        <IndividualEvents />
      </div>
    </div>
  );
};

export default HostDetailPage;
