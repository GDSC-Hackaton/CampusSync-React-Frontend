import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import HostsCard from "./HostsCard";
import "./hostpage.css";
import HostOverlay from "./HostOverlay";
function HostsPage() {
  const [hostchoice, setHostChoice] = useState(null);
  const [userchoice, setUserChoice] = useState(null);
  const [showOverlay, setshowOverlay] = useState(false);

  const getChoice = (choice) => {
    console.log(choice);
    setHostChoice(choice.toLowerCase());
  };

  console.log(hostchoice);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.request(
          "https://natty.pythonanywhere.com/user/hosts/"
        );
        console.log(response.data);
        setUserChoice(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="hostpage-container">
      {showOverlay && (
        <HostOverlay
          showOverlay={showOverlay}
          setshowOverlay={setshowOverlay}
        />
      )}
      <button
        onClick={() => setshowOverlay(!showOverlay)}
        className="add-event-btn"
      >
        <i className="fa fa-plus"></i>
      </button>
      <Search choicefunction={getChoice} />
      <div className="hostspage-hosts">
        {hostchoice !== null
          ? userchoice
              .filter((item) => item.hostname.toLowerCase() === hostchoice)
              .map((item) => <HostsCard key={item.id} item={item} />)
          : userchoice &&
            userchoice.map((item) => <HostsCard key={item.id} item={item} />)}
      </div>
    </div>
  );
}

export default HostsPage;
