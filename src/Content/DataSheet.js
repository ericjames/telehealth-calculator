import { useEffect, useRef, useState } from 'react';

import HelpText from '../Elements/HelpText';
import InputArea from './InputArea';
import SheetTotals from './SheetTotals';

const DataSheet = ({ setDataSheets, dataSheet }) => {

    // console.log("DataSheet", dataSheet);
    // Example object which has been transformed in App.js 
    // fields: (7)[{ … }, { … }, { … }, { … }, { … }, { … }, { … }]
    // gid: 1657140223
    // rows: [{ … }]
    // title: "Lost Productivity

    // console.log(dataSheet);

    return (
        <div className={`DataSheet ${dataSheet.active ? 'Selected' : ''}`}>
            <div className="container">
                <header>
                    <h2>{dataSheet.sheetTitle || "..."}</h2>
                    <HelpText text={dataSheet.sheetHelpText || ''} style={{ marginTop: 20 }} />
                </header>
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