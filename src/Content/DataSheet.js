import { useEffect, useRef, useState } from 'react';

import InputArea from './InputArea';
import SheetTotals from './SheetTotals';

const DataSheet = ({ setDataSheets, dataSheet }) => {

    // console.log("DataSheet", dataSheet);
    // Example object which has been transformed in App.js 
    // fields: (7)[{ … }, { … }, { … }, { … }, { … }, { … }, { … }]
    // gid: 1657140223
    // rows: [{ … }]
    // title: "Lost Productivity

    console.log(dataSheet);

    return (
        <div className={`DataSheet ${dataSheet.active ? 'Selected' : ''}`}>
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