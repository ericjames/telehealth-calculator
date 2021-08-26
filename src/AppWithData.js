import { useEffect, useState } from 'react';

import DataSheet from './Content/DataSheet.js';
import TotalsBanner from './Footer/TotalsBanner.js';


const AppWithData = ({ dataSheets, setDataSheets }) => {

    const [dataSheetsWithTotals, setDataSheetsWithTotals] = useState(null);

    // useEffect(() => {
    //     // Everytime datasheets is updated, calculate totals

    //     if (dataSheets) {
    //         let sheets = calculateTotals(dataSheets);

    //         console.log("useEffect", sheets);

    //     }

    // }, [dataSheets]);


    function calculateTotals(modifiedSheets) {
        return modifiedSheets;
    }

    function onChange() {

    }

    console.log("DATA", dataSheets);

    return (
        <div className="AppWithData">

            {dataSheets && dataSheets.map((sheet) => (
                <DataSheet key={sheet.id} dataSheet={sheet} setDataSheets={setDataSheets} />
            ))}

            <TotalsBanner dataSheets={dataSheets} />

        </div>

    )
}

export default AppWithData;


