import React from "react";

import "./PaymentsInfoCard.css";

const PaymentsInfoCard = ({ paymentsData }) => {
  return paymentsData.map((payee, index) => {
    const { Payee, Payment, Remittance } = payee;
    // console.log(Payee.Name);
    return (
      <div className="payee-info-card">
        <ul style={{ listStyleType: "none", marginTop: "4rem" }}>
          <h2>Name: {Payee.Name} </h2>
          <h3>Attention: {Payee.Attention}</h3>
          <li>Fax: {Payee.Fax} </li>
          <li>Phone: {Payee.Phone} </li>
          <li>
            Address: {Payee.Address.Address1}
            <br></br>
            City: {Payee.Address.City}
            <br></br>
            State or Province: {Payee.Address.StateOrProvince}
            <br></br>
            Country: {Payee.Address.Country}
            <br></br>
            Postal Code: {Payee.Address.PostalCode}
          </li>
        </ul>
        <div>
          {Remittance.map((rmitItem, index) => {
            // console.log(rmitItem);
            return (
              <ul style={{ listStyle: "none", display: "block" }}>
                <li>
                  <strong>Payor Name:</strong> {rmitItem.PayorName}
                </li>
                <li>
                  <p><strong>Invoice Number:</strong> {rmitItem.InvoiceNo}</p>
                </li>
                <li>
                  <p><strong>Description: </strong>{rmitItem.Description}</p>
                </li>
                <li>
                  <em><strong>Amount: </strong>{rmitItem.Amount}</em>
                </li>
              </ul>
            );
          })}
        </div>
        <div>
          <ul style={{ listStyle: "none" }}>
            <li><strong>CVV: </strong>{payee.Payment.CVV}</li>
            <li><strong>PAN: </strong>{payee.Payment.PAN}</li>
            <li><strong>Expires: </strong>{payee.Payment.Exp}</li>
          </ul>
        </div>
      </div>
    );
  });
};

export default PaymentsInfoCard;
