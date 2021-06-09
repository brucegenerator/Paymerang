import React from "react";

import "./PayeeInfoCard.css";

const PayeeInfoCard = (props) => {
  return (
    <div className="payee-info-card">
      <ul style={{ listStyleType: "none", marginTop: "4rem"}}>
        <h2>{props.name}</h2>
        <h3>{props.attention}</h3>
        <li>Fax: {props.fax}</li>
        <li>Phone: {props.phone}</li>
        <li>
          Address: {props.address}
          <br></br>
          City: {props.city}
          <br></br>
          State or Province: {props.stateOrProvince}
          <br></br>
          Country: {props.country}
          <br></br>
          Postal Code: {props.postalCode}
        </li>
      </ul>
    </div>
  );
};

export default PayeeInfoCard;
