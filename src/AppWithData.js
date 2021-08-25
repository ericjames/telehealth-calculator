import { useEffect, useState } from 'react';

import DataSheet from './Content/DataSheet.js';
import AllTotals from './Footer/AllTotals.js';


const AppWithData = ({ dataSheets, setDataSheets }) => {

    // const [dataSheets, setDataSheets] = useState(dataSheets);

    // useEffect(() => {
    //     if (dataSheet) {
    //         setFields(headerNames.splice(0, 4));
    //     }
    // }, []);

    function onChange() {

    }

    if (!dataSheets)
        return null
    // console.log("DATA", dataSheets);


    return (
        <div className="AppWithData">

            <DataSheet dataSheet={dataSheets[0]} setDataSheets={setDataSheets} />
            <DataSheet dataSheet={dataSheets[1]} setDataSheets={setDataSheets} />

            {/* <AllTotals fields={dataSheets[0].fields} /> */}

        </div>

    )
}

export default AppWithData;


