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

        let formulaString = field.formula.replace(',', '');

        console.log("START", formulaString);

        const variables = formulaString.match(/[\da-z_\s]+/g); // Any variable ie 30_day_rate
        variables.forEach((piece) => {
            // Part of formula is either columnId ref or just a number
            if (isNaN(piece)) {
                // Attempt to replace the value with the referred column's value
                for (let field of fields) {
                    if (field.columnId === piece.trim()) {
                        // const sanitizedValue = field.value.replace(",", "");
                        formulaString = formulaString.replace(piece, field.value);
                        break;
                    }
                }
            }
        });

        console.log("STEP ONE", formulaString, variables);

        if (formulaString.includes('(')) {
            const sets = formulaString.match(/\([\w\d\s\/\+]*\)/g);
            sets.forEach((set) => {
                if (set.includes('/')) {
                    const compare = set.replace('(', '').replace(')', '').split('/');
                    const result = parseFloat(compare[0]) / parseFloat(compare[1]);
                    formulaString = formulaString.replace(set, result);
                }
            });
        }
        console.log("STEP TWO", formulaString);

        if (formulaString.includes('*') && !formulaString.includes('/') && !formulaString.includes('+')) {
            const values = formulaString.split('*');
            formulaString = values.reduce((a, b) => a * parseFloat(b), 1);
        }

        console.log("STEP THREE", formulaString);

        // if (field.valueType === "dollar") {
        //     totalValue = totalValue.toFixed(2);
        // }

        // console.log(totalValue, values);
        return formulaString;
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


