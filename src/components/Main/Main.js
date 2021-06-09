import React, { useState, useEffect } from "react";
import PayeeInfoCard from "../PayeeInfoCard/PayeeInfoCard";
import RemittanceCardInfo from "../Remittance/RemittanceCard";
import data from "../../data/sample.json";
import "./Main.css";

const Main = (props) => {
  const [paymentsData, setPaymentsData] = useState([]);

  useEffect(() => {
    setPaymentsData(data);
  }, [data]);

  return (
    <div className="card-container">
      {paymentsData.map((item, index) => {
        const Payee = item.Payee;
        const Address = item.Payee.Address;
        return (
          <PayeeInfoCard
            name={Payee.Name}
            fax={Payee.Fax}
            phone={Payee.Phone}
            address={Address.Address1}
            city={Address.City}
            stateOrProvince={Address.StateOrProvince}
            country={Address.Country}
            postalCode={Address.PostalCode}
            attention={Payee.Attention}
          />
        );
      })}
      {data.map((item, indeex) => {
        // console.log(item.Remittance);
        return <RemittanceCardInfo />;
      })}
    </div>
  );
};

export default Main;
