import { useEffect, useState } from 'react';

import DataSheet from './Content/DataSheet.js';
import TotalsBanner from './Footer/TotalsBanner.js';


const AppWithData = ({ text, dataSheets, setDataSheets }) => {

    const [dataSheetsWithTotals, setDataSheetsWithTotals] = useState(null);

    useEffect(() => {
        // Everytime datasheets is updated, calculate totals
        if (dataSheets) {
            let sheets = calculateTotals(dataSheets);
            console.log("calculateTotals");
            setDataSheetsWithTotals(sheets);
        }
    }, [dataSheets]);

    function calculateTotals(sheets) {
        return sheets.map((sheet) => {
            sheet.fields.forEach((field) => {
                // console.log("OMG", field);
                if (field && field.formula && field.formula !== 'null') {
                    field.value = getFieldTotalValue(sheet.fields, field);
                }
            })
            return sheet;
        })
    }

    function getFieldTotalValue(fields, field) {
        const parts = field.formula.split("*");
        const values = parts.map((part) => {
            // Part of formula is either columnId ref or just a number
            let colRefValue = part.trim();

            // Attempt to replace the value with the referred column
            for (let field of fields) {
                if (field.columnId === colRefValue) {
                    // const sanitizedValue = field.value.replace(",", "");
                    colRefValue = parseFloat(field.value);
                    break;
                }
            }

            return colRefValue;
        });

        // console.log("To Calculate", field.formula, parts, values);

        let totalValue = null;
        try {
            totalValue = values.reduce((a, b) => a * parseFloat(b), 1);
            // if (field.valueType === "dollar") {
            //     totalValue = totalValue.toFixed(2);
            // }
        } catch (e) {
            console.error(e);
        }
        // console.log(totalValue, values);
        return totalValue;
    }

    function onChange() {

    }

    // console.log("DATA", dataSheets);

    return (
        <div className="AppWithData">

            {dataSheets && dataSheets.map((sheet) => (
                <DataSheet key={sheet.id} dataSheet={sheet} setDataSheets={setDataSheets} />
            ))}

            <TotalsBanner text={text} dataSheets={dataSheetsWithTotals} />

        </div>

    )
}

export default AppWithData;


