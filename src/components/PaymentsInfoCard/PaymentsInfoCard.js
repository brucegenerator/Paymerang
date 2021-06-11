import { set } from "mongoose";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import "./PaymentsInfoCard.css";

const PaymentsInfoCard = ({ paymentsData }) => {
  const [showPayeeInfo, setShowPayeeInfo] = useState(false);
  const [showRemittances, setshowRemittances] = useState(false);

  return paymentsData.map((payee, index) => {
    const { Payee, Remittance } = payee;
    // console.log(Payee.Name);
    return (
      <div className="card" style={{ width: "100%" }}>
        <h5
          className="card-title text-center"
          onClick={() => setShowPayeeInfo(true)}
        >
          {Payee.Name}
        </h5>

        <CSSTransition
          in={showPayeeInfo}
          timeout={200}
          classNames="slide-in-left"
          mountOnEnter
          unmountOnExit
        >
          <div className="card-body">
            <div className="card text-center">
              <div className="card-header" style={{ border: "none" }}>
                <p className="card-text">{Payee.Attention}</p>
              </div>
              <p>Phone: {Payee.Phone} </p>
              <p>Fax: {Payee.Fax}</p>
              <ul className="list-group list-group-flush text-center">
                <li className="list-group-item">
                  Address: {Payee.Address.Address1}
                  <br></br>
                  {Payee.Address.City}, {Payee.Address.StateOrProvince},{" "}
                  {Payee.Address.Country}
                  {Payee.Address.PostalCode}
                </li>
              </ul>
            </div>
            <h5
              className="card-title text-center"
              onClick={() => setShowPayeeInfo(false)}
            >
              Hide Info
            </h5>

            <h5
              className="text-center"
              onClick={() => setshowRemittances(true)}
            >
              Show Remittances
            </h5>
          </div>
        </CSSTransition>
        {Remittance.map((rmitItem, index) => {
          return (
            <div className="card-group">
              <div className="card" style={{ width: "100%" }}>
                <CSSTransition
                  in={showRemittances}
                  timeout={200}
                  classNames="slide-in-left"
                  mountOnEnter
                  unmountOnExit
                >
                  <div className="card-body text-center">
                    <p className="card-text">
                      Payor Name: {rmitItem.PayorName}
                    </p>
                    <p>Invoice Number:{rmitItem.InvoiceNo}</p>
                    <p className="card-text">{rmitItem.Description}</p>
                    <p className="card-text">
                      Amount Paid: <em>{rmitItem.Amount}</em>
                    </p>
                    <div>
                      <h5
                        style={{ textAlign: "center" }}
                        onClick={() => setshowRemittances(false)}
                      >
                        Hide Remittances
                      </h5>
                    </div>
                  </div>
                </CSSTransition>
              </div>
            </div>
          );
        })}

        <div className="card-footer text-muted text-center">
          <p className="card-text">CVV: {payee.Payment.CVV}</p>
          <p className="card-text">PAN: {payee.Payment.PAN}</p>
          <p className="card-text">Exp: {payee.Payment.Exp}</p>
        </div>
      </div>
    );
  });
};

export default PaymentsInfoCard;
