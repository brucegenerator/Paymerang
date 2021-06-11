import React, { useState, useEffect } from "react";
import PaymentsInfoCard from "../PaymentsInfoCard/PaymentsInfoCard";
import Footer from '../Footer/Footer'
import Pagination from '../Pagination/Pagination'
import data from "../../data/sample.json";
import "./Main.css";

const Main = (props) => {
  const [paymentsData, setPaymentsData] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [resultsPerPage] = useState(5);
  const [renderPaymentsData, setRenderPaymentsData] = useState([]);

  useEffect(() => {
    
    const sliceDataResults = () => {
      setPaymentsData(data);
      setRenderPaymentsData(data.slice(
        currentPageNumber * resultsPerPage - resultsPerPage,
        currentPageNumber * resultsPerPage
      ))
    }
    sliceDataResults();
  }, [currentPageNumber, resultsPerPage]);

  const indexOfLastPayment = currentPageNumber * resultsPerPage;
  const indexOfFirstPayment = indexOfLastPayment - resultsPerPage;
  let currentPayements;

  const fetchCurrentPaymentsHandler = () => {
    currentPayements = data.slice(indexOfFirstPayment, indexOfLastPayment);
    return setPaymentsData(currentPayements);
  }

  const pagination = pageNumber => setCurrentPageNumber(pageNumber)

  return (
    <div className="card-container">
      <PaymentsInfoCard paymentsData={renderPaymentsData}/>
      <Footer>
        <Pagination 
          resultsPerPage={resultsPerPage}
          pagination={pagination} />
      </Footer>
    </div>
  );
};

export default Main;
