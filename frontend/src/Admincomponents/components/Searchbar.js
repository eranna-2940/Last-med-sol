import React from 'react';

const Searchbar = (props) => {
    const pageSize=props.pageSize;
    const setPageSize=props.setPageSize;

    const handleRowsChange = (e) => {
      const rows = parseInt(e.target.value);
      setPageSize(rows);
    };

    function handleSearch() {
      var input, filter, table, tr, td, i, txtValue, noResult;
      input = document.getElementById("searchbox");
      filter = input.value.toUpperCase();
      table = document.getElementById("dynamic-table");
      tr = table.getElementsByTagName("tr");
      noResult = document.getElementById("noresults");
  
      let found = false;
  
      for (i = 1; i < tr.length-1; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          found = true;
        } else {
          tr[i].style.display = "none";
        }
      }
      if (found) {
        noResult.style.display = "none";
      } else {
        noResult.style.display = "block";
        noResult.innerText = "No matching records found";
      }
    }
    return (
        <>
         <div
                className="d-flex justify-content-between"
                style={{ background: "#EFF3F8", width: "100%" }}
              >
                <div className="p-2 d-flex">
                  <label className="mt-2" style={{ minWidth: "120px" }}>
                    Display records
                  </label>
                  <select
                    name="dynamic-table_length"
                    aria-controls="dynamic-table"
                    className="form-select"
                    id="rowsDropdown"
                    onChange={handleRowsChange}
                    value={pageSize}
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
                <div className="p-2 d-flex">
                  <label className="mt-2">Search:</label>
                  <input
                    type="search"
                    placeholder="Search here"
                    id="searchbox"
                    aria-controls="dynamic-table"
                    className="form-control"
                    onKeyUp={handleSearch}
                  />
                </div>
              </div>
            
        </>
    );
};

export default Searchbar;