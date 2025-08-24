import React from "react";
import NavBar from "../../../components/Navbar/Navbar";

const AnalyticsPage = ({ user, setUser }) => {
  return (
    <main>
      <aside>
        <NavBar user={user} setUser={setUser} />
      </aside>
      <div>
        <h1>Analytics Page</h1>
      </div>
    </main>
  );
};

export default AnalyticsPage;
