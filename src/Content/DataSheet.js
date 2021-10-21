import { useState, useEffect, useRef } from 'react';


import InputArea from './InputArea';
import SheetTotals from './SheetTotals';

const DataSheet = ({ setDataSheets, selectedSheet, dataSheet }) => {

    // console.log("DataSheet", dataSheet);
    // Example object which has been transformed in App.js 
    // fields: (7)[{ … }, { … }, { … }, { … }, { … }, { … }, { … }]
    // gid: 1657140223
    // rows: [{ … }]
    // title: "Lost Productivity

    const isSelected = parseFloat(selectedSheet) === dataSheet.gid;

    return (
        <div className={`DataSheet ${isSelected ? 'Selected' : ''}`}>
            <div className="container">
                <h2>{dataSheet.title || "..."}</h2>
                {dataSheet && dataSheet.fields ?
                    <>
                        <InputArea dataSheet={dataSheet} setDataSheets={setDataSheets} />
                        <SheetTotals dataSheet={dataSheet} />
                    </>
                    : null}
            </div>
        </div>
    )
};


export default DataSheet