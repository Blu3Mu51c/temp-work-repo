// pages/Booking/OrdersPage/OrdersPage.jsx
import React from "react";
import NavBar from "../../../components/Navbar/Navbar";

const OrdersPage = ({ user, setUser }) => {
  return (
    <div>
      <aside>
        <NavBar user={user} setUser={setUser} />
      </aside>
      <h1>Orders Page</h1>
    </div>
  );
};

export default OrdersPage;
