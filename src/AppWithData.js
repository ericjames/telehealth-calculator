import { useEffect, useState } from 'react';

import DataSheet from './Content/DataSheet.js';
import TotalsBanner from './Footer/TotalsBanner.js';


const AppWithData = ({ dataSheets, setDataSheets }) => {

    const [dataSheetsWithTotals, setDataSheetsWithTotals] = useState(null);

    useEffect(() => {
        // Everytime datasheets is updated, calculate totals
        if (dataSheets) {
            let sheets = calculateTotals(dataSheets);
            setDataSheetsWithTotals(sheets);
        }
    }, [dataSheets]);

    function calculateTotals(sheets) {
        return sheets.map((sheet) => {
            sheet.fields.forEach((field) => {
                if (field && field.formula && field.formula !== 'null') {
                    field.total = getFieldTotal(sheet.fields, field);
                }
            })
            return sheet;
        })
    }

    function getFieldTotal(fields, field) {
        const parts = field.formula.split("*");
        const values = parts.map((part) => {
            // Part of formula is either columnId ref or just a number
            let convertedValue = part.trim();
            for (let field of fields) {
                if (field.columnId === convertedValue) {
                    convertedValue = field.value;
                    break;
                }
            }
            return convertedValue;
        });

        let total = null;
        try {
            total = values.reduce((a, b) => a * parseFloat(b), 1);
        } catch (e) {
            console.error(e);
        }
        // console.log(total, values);
        return total;
    }

    function onChange() {

    }

    // console.log("DATA", dataSheets);

    return (
        <div className="AppWithData">

            {dataSheets && dataSheets.map((sheet) => (
                <DataSheet key={sheet.id} dataSheet={sheet} setDataSheets={setDataSheets} />
            ))}

            <TotalsBanner dataSheets={dataSheetsWithTotals} />

        </div>

    )
}

export default AppWithData;


