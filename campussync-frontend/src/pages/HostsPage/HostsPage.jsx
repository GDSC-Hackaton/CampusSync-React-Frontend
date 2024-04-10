import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search/Search";
import HostsCard from "./HostCard/HostsCard";
import "./hostpage.css";

function HostsPage() {
  const [hostchoice, setHostChoice] = useState(null);
  const [userchoice, setUserChoice] = useState(null);

  const getChoice = (choice) => {
    console.log(choice);
    setHostChoice(choice);
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
      <Search choicefunction={getChoice} />
      <div className="hostspage-hosts">
        {hostchoice !== null
          ? userchoice
              .filter((item) => item.hostname === hostchoice)
              .map((item) => <HostsCard key={item.id} item={item} />)
          : userchoice &&
            userchoice.map((item) => <HostsCard key={item.id} item={item} />)}
      </div>
    </div>
  );
}

export default HostsPage;
