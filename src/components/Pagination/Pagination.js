import React from "react";

const Pagination = ({ pagination }) => {
  
  const pages = [];
  for (let i = 1; i <= 3; i++) {
    pages.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {pages.map((page, index) => {
          return (
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => {
                  pagination(page);
                }}
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
