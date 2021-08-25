import { useState, useEffect } from 'react';


import InputArea from './InputArea';
import SheetTotals from './SheetTotals';

const DataSheet = ({ setDataSheets, dataSheet }) => {

    if (!dataSheet || !dataSheet.fields) return null;

    // console.log("DataSheet", dataSheet);
    // Example object which has been transformed in App.js 
    // fields: (7)[{ … }, { … }, { … }, { … }, { … }, { … }, { … }]
    // gid: 1657140223
    // rows: [{ … }]
    // title: "Lost Productivity

    return (
        <div className="DataSheet">
            <h2>{dataSheet.title}</h2>
            <InputArea dataSheet={dataSheet} setDataSheets={setDataSheets} />
            <SheetTotals dataSheet={dataSheet} />
        </div>
    )
};


export default DataSheet