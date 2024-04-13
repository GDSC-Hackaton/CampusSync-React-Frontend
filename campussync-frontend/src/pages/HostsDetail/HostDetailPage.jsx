import React, { useState, useEffect, useContext } from "react";
import HostDetailCard from "./HostDetailCard";
import axios from "axios";
import "./HostDetail.css";
import IndividualEvents from "./IndividualEvents";
import { useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const HostDetailPage = () => {
  const { hostid } = useParams();
  const [choice,setChoice ] = useState(null);
  const [events, setEvents] = useState([]);
  const[follower,setFollower]=useState([]);
  const url = "https://natty.pythonanywhere.com/user/events_by_host/";
  const { user, AuthUser } = useContext(AuthContext);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://natty.pythonanywhere.com/user/hosts/${hostid}/`
        );
        console.log(response.data);
        setChoice(response.data);
        setFollower(response.data.followers);
        console.log(follower);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchdata();

    const requestBody = {
      host_id: hostid,
    };

    const fetchEventData = async () => {
      try {
        const response = await axios.post(url, requestBody);
        console.log("Response:", response.data);
        setEvents(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchEventData();
  }, [hostid]);

  return (
    <div className="host-detail-page">
      <div className="host-detail-content">
        {choice ? (
          <HostDetailCard item2={choice} name={user.user_id} host={follower}/>
        ) : (
          <p>Loading...</p>
        )}
        {events.map((item) => (
          <IndividualEvents userid={hostid} item={item} name={choice?.hostname} />
        ))}
      </div>
    </div>
  );
};

export default HostDetailPage;
