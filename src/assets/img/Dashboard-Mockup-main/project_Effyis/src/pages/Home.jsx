import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Redirect to /mockupdashboard on component mount
  useEffect(() => {
    navigate("/mockupdashboard");
  }, [navigate]);

  return (
    <div className="navigation">
      {/* This Link is optional, as the redirection happens automatically */}
      {/* <li>
        <Link to="/mockupdashboard">MockupDashboard</Link>
      </li> */}
    </div>
  );
};

export default Home;
