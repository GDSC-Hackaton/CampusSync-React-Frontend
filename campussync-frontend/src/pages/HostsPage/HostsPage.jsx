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
<<<<<<< HEAD

function HostsPage() {
  const [hostchoice, setHostChoice] = useState(null);
  const [userchoice, setUserChoice] = useState(null);
  const [filteredHosts, setFilteredHosts] = useState(null);
=======
import "./hostcard.css";
import HostOverlay from "./HostOverlay";
function HostsPage() {
  const [hostchoice, setHostChoice] = useState(null);
  const [userchoice, setUserChoice] = useState(null);
  const [showOverlay, setshowOverlay] = useState(false);
  const [loading, setLoading] = useState(true);
  const getChoice = (choice) => {
    console.log(choice);
    setHostChoice(choice.toLowerCase());
  };

  console.log(hostchoice);
>>>>>>> parent of b39af38 (final frontend push)

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
        setUserChoice(response.data);
        setLoading(false);
>>>>>>> parent of b39af38 (final frontend push)
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);

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
<<<<<<< HEAD
      <Search choicefunction={handleChoiceChange} />
      <div className="hostspage-hosts">
        {filteredHosts &&
          filteredHosts.map((item) => <HostsCard key={item.id} item={item} />)}
=======
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
        >
          Be a Host <i className="fa fa-plus"></i>
        </button>
      </>
      <Search choicefunction={getChoice} />
      <div className="hostspage-hosts">
        {hostchoice !== null
          ? userchoice
              .filter((item) => item.hostname.toLowerCase() === hostchoice)
              .map((item) => <HostsCard key={item.id} item={item} />)
          : userchoice &&
            userchoice.map((item) => <HostsCard key={item.id} item={item} />)}
>>>>>>> parent of b39af38 (final frontend push)
      </div>
    </div>
  );
}

export default HostsPage;
