import React, { useState, useEffect, useContext } from "react";
import HostDetailCard from "./HostDetailCard";
import axios from "axios";
import "./HostDetail.css";
import IndividualEvents from "./IndividualEvents";
import { useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
<<<<<<< HEAD

const HostDetailPage = () => {
  const { id1 } = useParams();
  const [choic, setChoic] = useState(null);
  const [events, setEvents] = useState([]);
  const[follower,setFollower]=useState([]);
  const url = "https://natty.pythonanywhere.com/user/events_by_host/";
  const { user, AuthUser } = useContext(AuthContext);
  // console.log(user);
=======
import { Link } from "react-router-dom";
const HostDetailPage = () => {
  const { hostid } = useParams();
  const [choice, setChoice] = useState(null);
  const [events, setEvents] = useState([]);
  const [follower, setFollower] = useState([]);
  const url = "https://natty.pythonanywhere.com/user/events_by_host/";
  const { user, AuthUser } = useContext(AuthContext);
>>>>>>> b39af38e6445f76a3884fe7f8420dc3e4cebca0f
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
<<<<<<< HEAD
          `https://natty.pythonanywhere.com/user/hosts/${id1}/`
        );
        console.log(response.data);
        setChoic(response.data);
=======
          `https://natty.pythonanywhere.com/user/hosts/${hostid}/`
        );
        console.log(response.data);
        setChoice(response.data);
>>>>>>> b39af38e6445f76a3884fe7f8420dc3e4cebca0f
        setFollower(response.data.followers);
        console.log(follower);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchdata();

    const requestBody = {
<<<<<<< HEAD
      host_id: id1,
=======
      host_id: hostid,
>>>>>>> b39af38e6445f76a3884fe7f8420dc3e4cebca0f
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
<<<<<<< HEAD
  }, [id1]);

  // useEffect(() => {
  //   const fetchdata1 = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://natty.pythonanywhere.com/user/events_by_host/?host_id=${id1}`
  //       );
  //       console.log(response.data);
  //     } catch (error) {
  //       console.log("Error fetching data:", error);
  //     }
  //   };
  //   fetchdata1();
  // }, [id1]);
  // axios
  //   .post(url, requestBody)
  //   .then((response) => {
  //     console.log("Response:", response.data);
  //     setEvents(response.data);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });

  // useEffect(() => {
  //   const fetchEventData = async () => {
  //     try {
  //       const response = await axios.post(url, requestBody);
  //       console.log("Response:", response.data);
  //       setEvents(response.data);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   fetchEventData();
  // }, [id1]);
=======
  }, [hostid]);
>>>>>>> b39af38e6445f76a3884fe7f8420dc3e4cebca0f

  return (
    <div className="host-detail-page">
      <div className="host-detail-content">
<<<<<<< HEAD
        {choic ? (
          <HostDetailCard item2={choic} name={user.user_id} host={follower}/>
        ) : (
          <p>Loading...</p>
        )}
        {events.map((item) => (
          <IndividualEvents userid={id1} item={item} name={choic.hostname} />
        ))}
=======
        {choice ? (
          <HostDetailCard item2={choice} name={user.user_id} host={follower} />
        ) : (
          <p>Loading...</p>
        )}
        <h1
          style={{ background: "#ddd", padding: "10px", textAlign: "center" }}
        >
          Events by {choice?.hostname}
        </h1>

        {events.length > 0 ? (
          events.map((item) => (
            <IndividualEvents
              userid={hostid}
              item={item}
              name={choice?.hostname}
            />
          ))
        ) : (
          <div style={{ margin: "10px auto", textAlign: "center" }}>
            <span style={{ fontSize: "20px" }}>
              {choice?.hostname} has no Events Yet !
            </span>
            <div className="answer">
              <img style={{ width: "60%" }} src="/nofollow.gif" />
            </div>
          </div>
        )}
>>>>>>> b39af38e6445f76a3884fe7f8420dc3e4cebca0f
      </div>
    </div>
  );
};

export default HostDetailPage;
