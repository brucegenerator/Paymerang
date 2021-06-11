import React, { useState, useEffect } from "react";
import PaymentsInfoCard from "../PaymentsInfoCard/PaymentsInfoCard";

import data from "../../data/sample.json";
import "./Main.css";

const Main = (props) => {
  const [paymentsData, setPaymentsData] = useState([]);

  useEffect(() => {
    setPaymentsData(data);
  }, []);

  return (
    <div className="card-container">
      <PaymentsInfoCard paymentsData={paymentsData}/>
    </div>
  );
};

export default Main;
