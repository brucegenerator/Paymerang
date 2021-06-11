import { set } from "mongoose";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import "./PaymentsInfoCard.css";

const PaymentsInfoCard = ({ paymentsData }) => {
  const [showPayeeInfo, setShowPayeeInfo] = useState(false);
  const [showRemittances, setshowRemittances] = useState(false);

  const toggleShowPayeeInfo = () => setShowPayeeInfo((value) => !value);

  return paymentsData.map((payee, index) => {
    const { Payee, Remittance } = payee;
    // console.log(Payee.Name);
    return (
      <div className="card" style={{ width: "100%" }}>
        <h5
          className="card-title text-center"
          onClick={() => setShowPayeeInfo((value) => !value)}
          id="click-me"
        >
          {Payee.Name}
        </h5>
        <i
          class="chevron-close fas fa-chevron-up"
          onClick={() => setShowPayeeInfo((value) => !value)}
        ></i>
        <CSSTransition
          in={showPayeeInfo}
          timeout={200}
          classNames="slide-in-left"
          mountOnEnter
          unmountOnExit
        >
          <div className="card-body">
            <div className="card text-center">
              <div
                className="card-header"
                style={{ border: "none", backgroundColor: "transparent" }}
              >
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
            <div className="hide-info-container"></div>
            <div>
              <h5
                className="show-remittances text-center"
                onClick={() => setshowRemittances((value) => !value)}
              >
                Show Remittances
              </h5>
            </div>
          </div>
        </CSSTransition>
        {Remittance.map((rmitItem, index) => {
          return (
            <CSSTransition
              in={showRemittances}
              timeout={200}
              classNames="slide-in-left"
              mountOnEnter
              unmountOnExit
            >
              <div className="card-group">
                <div className="card" style={{ width: "100%" }}>
                  <div className="card-body text-center">
                    <p className="card-text">
                      Payor Name: {rmitItem.PayorName}
                    </p>
                    <p>Invoice Number:{rmitItem.InvoiceNo}</p>
                    <p className="card-text">{rmitItem.Description}</p>
                    <p className="card-text">
                      Amount Paid: <em>{rmitItem.Amount}</em>
                    </p>
                  </div>
                </div>
              </div>
            </CSSTransition>
          );
        })}
        <CSSTransition
          in={showRemittances}
          timeout={200}
          classNames="slide-in-left"
          mountOnEnter
          unmountOnExit
        >
          <div className="card-footer text-muted text-center">
            <p className="card-text">CVV: {payee.Payment.CVV}</p>
            <p className="card-text">PAN: {payee.Payment.PAN}</p>
            <p className="card-text">Exp: {payee.Payment.Exp}</p>
          </div>
        </CSSTransition>
      </div>
    );
  });
};

export default PaymentsInfoCard;
