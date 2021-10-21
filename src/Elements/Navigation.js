
import { useState } from "react";
import config from "../config";

const Navigation = ({ currentPage, setCurrentPage, selectedSheet, setSelectedSheet }) => {

    const sheetGids = config.setupDataSheets.map((sheet) => {
        return {
            gid: sheet.gid,
            title: sheet.title
        };
    })

    function doSelect(e) {
        const value = e.target.value;
        console.log(value);
        setSelectedSheet(value);
    }

    function setOverlay(name) {
        if (currentPage === name) {
            setCurrentPage('home');
        } else {
            setCurrentPage(name);
        }
    }

    return (
        <nav className="navigation">
            {/* <button onClick={() => setPage('home')}>Home</button> */}
            <select className="selector" value={selectedSheet} onChange={doSelect}>
                {sheetGids.map((sheet) => <option value={sheet.gid}>{sheet.title}</option>)}
            </select>
            <button onClick={() => setOverlay('about')}>About</button>
            <button onClick={() => setOverlay('sources')}>Sources</button>
        </nav>
    )
};

export default Navigation;