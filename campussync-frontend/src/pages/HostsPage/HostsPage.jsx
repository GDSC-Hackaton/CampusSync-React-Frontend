<<<<<<< HEAD
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Search from "./Search/Search";
// import HostsCard from "./HostCard/HostsCard";
// import "./hostpage.css";

// function HostsPage() {
//   const [hostchoice, setHostChoice] = useState(null);
//   const [userchoice, setUserChoice] = useState(null);

//   const getChoice = (choice) => {
//     setHostChoice(choice.toLowerCase());
//   };

//   useEffect(() => {
//     const fetchdata = async () => {
//       try {
//         const response = await axios.request(
//           "https://natty.pythonanywhere.com/user/hosts/"
//         );
//         setUserChoice(response.data);
//       } catch (error) {
//         console.log("Error fetching data:", error);
//       }
//     };
//     fetchdata();
//   }, []);

//   return (
//     <div className="hostpage-container">
//       <Search choicefunction={getChoice} />
//       <div className="hostspage-hosts">
//         {hostchoice !== null
//           ? userchoice
//               .filter((item) => item.hostname.toLowerCase() === hostchoice)
//               .map((item) => <HostsCard key={item.id} item={item} />)
//           : userchoice &&
//             userchoice.map((item) => <HostsCard key={item.id} item={item} />)}
//       </div>
//     </div>
//   );
// }

// export default HostsPage;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search/Search";
import HostsCard from "./HostCard/HostsCard";
import "./hostpage.css";

function HostsPage() {
  const [hostchoice, setHostChoice] = useState(null);
  const [userchoice, setUserChoice] = useState(null);
  const [filteredHosts, setFilteredHosts] = useState(null);
=======
import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import HostsCard from "./HostsCard";
import "./hostpage.css";
import "./hostcard.css";
import HostOverlay from "./HostOverlay";
import { Link } from "react-router-dom";
function HostsPage() {
  const [hosts, setHosts] = useState(null);
  const [showOverlay, setshowOverlay] = useState(false);
  const [loading, setLoading] = useState(true);
>>>>>>> b39af38e6445f76a3884fe7f8420dc3e4cebca0f

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.request(
          "https://natty.pythonanywhere.com/user/hosts/"
        );
<<<<<<< HEAD
        setUserChoice(response.data);
        setFilteredHosts(response.data);
=======
        console.log(response.data);
        setHosts(response.data);
        setLoading(false);
>>>>>>> b39af38e6445f76a3884fe7f8420dc3e4cebca0f
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);

<<<<<<< HEAD
  // Filter hosts based on choice
  useEffect(() => {
    if (hostchoice === null) {
      setFilteredHosts(userchoice);
    } else {
      setFilteredHosts(
        userchoice.filter((item) =>
          item.hostname.toLowerCase().includes(hostchoice.toLowerCase())
        )
      );
    }
  }, [hostchoice, userchoice]);

  // Function to handle choice change
  const handleChoiceChange = (choice) => {
    setHostChoice(choice.toLowerCase());
  };

  return (
    <div className="hostpage-container">
      <Search choicefunction={handleChoiceChange} />
      <div className="hostspage-hosts">
        {filteredHosts &&
          filteredHosts.map((item) => <HostsCard key={item.id} item={item} />)}
=======
  return (
    <div className="hostpage-container">
      <>
        {showOverlay && (
          <HostOverlay
            showOverlay={showOverlay}
            setshowOverlay={setshowOverlay}
          />
        )}

        <button
          onClick={() => setshowOverlay(!showOverlay)}
          className="add-event-btn"
          style={{ top: "15%" }}
        >
          Be a Host <i className="fa fa-plus"></i>
        </button>
      </>
      <Search setHosts={setHosts} />
      <div className="hostspage-hosts">
        {loading ? (
          <img src="loading.gif" alt="Loading..." />
        ) : hosts.length > 0 ? (
          hosts.map((host) => <HostsCard host={host} />)
        ) : (
          <div style={{ marginLeft: "30%", textAlign:"center", boxShadow: "none" }}>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontSize: "20px" }}>
                No Hosts found

              </span>
              <div className="answer">
                <img src="/empty.gif" />
              </div>
            </div>
          </div>
        )}
>>>>>>> b39af38e6445f76a3884fe7f8420dc3e4cebca0f
      </div>
    </div>
  );
}

export default HostsPage;
