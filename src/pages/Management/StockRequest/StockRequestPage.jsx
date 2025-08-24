// pages/Management/StockRequest/StockRequestPage.jsx
import React from "react";
import NavBar from "../../../components/Navbar/Navbar";

const StockRequestPage = ({ user, setUser }) => {
  return (
    <main>
      <aside>
        <NavBar user={user} setUser={setUser} />
      </aside>
      <div>
        <h1>Stock Request Page</h1>
      </div>
    </main>
  );
};

export default StockRequestPage;
