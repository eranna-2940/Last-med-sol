import React from 'react';
import { saveAs } from "file-saver";
import { Link } from "react-router-dom";

const Csvclipboard = () => {
    const exportCsv = () => {
        const rows = document.querySelectorAll("table tr")
        let csv = []
        for (const row of rows) {
          const cells = row.querySelectorAll("td, th")
          const rowText = Array.from(cells).map(cell => cell.innerText)
          csv.push(rowText.join(","))
        }
        const csvFile = new Blob([csv.join("\n")], {
          type: "text/csv;charset=utf-8;",
        })
        saveAs(csvFile, "data.csv")
      }
    
      
      const copyToClipboard = () => {
        var table = document.getElementById('dynamic-table');
            
        if (navigator.clipboard) {
            var text = table.innerText.trim();
            navigator.clipboard.writeText(text).catch(function () { });
        }
      }
    return (
        <>
         <div className="">
            <ul className="pagination"> 
                <li className="page-item"><Link className="page-link text-dark" ><i className="bi bi-search"></i></Link></li>
                <li className="page-item"><Link className="page-link text-dark" onClick={copyToClipboard}><i className="bi bi-copy"></i></Link></li>
                <li className="page-item"><Link className="page-link text-dark" onClick={exportCsv}><i className="bi bi-database-fill"></i></Link></li>
                <li className="page-item"><Link className="page-link text-dark"><i className="bi bi-printer-fill"></i></Link></li>
            </ul>
        </div>
            
        </>
    );
};

export default Csvclipboard;