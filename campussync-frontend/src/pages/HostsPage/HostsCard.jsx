import React from "react";
import "./hostcard.css";
import { Link } from "react-router-dom";

function HostsCard({ item }) {
  return (
    <Link to={`/hosts/${item.id}`}>
        <div className="host-card" style={{ backgroundImage: `url(${item.account_pic})` }}>
          <div className="overlay-content">
            <h2 className="card-title">{item.hostname}</h2>
          </div>
        </div>
    </Link>
  );
}

export default HostsCard;
