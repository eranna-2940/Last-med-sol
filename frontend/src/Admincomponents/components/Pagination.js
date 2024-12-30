import React from 'react';

const Pagination = (props) => {
  const { stateData, setViewRowIndex, pageSize, currentPage, setCurrentPage } = props;
  const totalPages = Math.ceil(stateData.length / pageSize);

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setViewRowIndex(null);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setViewRowIndex(null);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    setViewRowIndex(null);
  };

  const generatePageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          className={`page-item ${i === currentPage ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => handlePageClick(i)}>
            {i}
          </button>
        </li>
      );
    }
    return pages;
  };

  const startIndex = (currentPage - 1) * pageSize + 1;
  const endIndex = Math.min(currentPage * pageSize, stateData.length);

  return (
    <>
      <div className="d-flex justify-content-between " style={{ background: "#EFF3F8", width: "100%" }}>
        <div className="p-3">
          <div className="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">
            Showing {startIndex} to {endIndex} of {stateData.length} entries
          </div>
        </div>
        <nav className='m-2 mt-2'>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={handlePreviousClick}>
                Previous
              </button>
            </li>
            {generatePageNumbers()}
            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
              <button className="page-link" onClick={handleNextClick}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Pagination;
