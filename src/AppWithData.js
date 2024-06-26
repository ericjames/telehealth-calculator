import { useEffect, useState } from 'react';

import DataSheet from './Content/DataSheet.js';
import TotalsBanner from './Footer/TotalsBanner.js';

const AppWithData = ({ text, dataSheets, setDataSheets }) => {

    const [dataSheetsWithTotals, setDataSheetsWithTotals] = useState(null);

    useEffect(() => {
        // Everytime datasheets is updated, calculate totals
        if (dataSheets) {
            let sheets = calculateSheetTotals(dataSheets);
            setDataSheetsWithTotals(sheets);
        }
    }, [dataSheets]);

    function calculateSheetTotals(sheets) {
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

    // console.log("DATA", dataSheets);

    return (
        <div className="AppWithData">

            {dataSheets && dataSheets.map((sheet) => {
                return <DataSheet key={sheet.id} dataSheet={sheet} setDataSheets={setDataSheets} />
            })}

            <TotalsBanner text={text} dataSheets={dataSheetsWithTotals} />

        </div>

    )
}

export default AppWithData;



function getFieldTotalValue(fields, field) {

    let formulaString = field.formula.replaceAll(',', '');

    // Replace all variables with their values
    const variables = formulaString.match(/[\d\w_\s]+/g); // Any variable ie 30_day_rate
    variables.forEach((piece) => {
        // Part of formula is either columnId ref or just a number
        if (isNaN(piece)) {
            // Attempt to replace the value with the referred column's value
            for (let field of fields) {
                if (field.columnId === piece.trim()) {
                    // const sanitizedValue = field.value.replace(",", "");
                    formulaString = formulaString.replaceAll(piece, field.value);
                    break;
                }
            }
        }
    });

    // Sanitize
    formulaString = formulaString.replaceAll(',', '');

    if (formulaString.includes('(')) {
        const sets = formulaString.match(/(\([\w\d.\*\/\+]*\))+/g);
        // console.log("STEP ONE ()", formulaString, sets);
        sets.forEach((set) => {
            if (set.includes('/')) {
                const compare = set.replace('(', '').replace(')', '').split('/');
                const result = parseFloat(compare[0]) / parseFloat(compare[1]);
                formulaString = formulaString.replace(set, result);
            } else if (set.includes('*')) {
                const compare = set.replace('(', '').replace(')', '').split('*');
                const result = compare.reduce((a, b) => a * parseFloat(b), 1);
                formulaString = formulaString.replace(set, result);
            } else if (set.includes('+')) {
                const compare = set.replace('(', '').replace(')', '').split('+');
                const result = compare.reduce((a, b) => a + parseFloat(b), 1);
                formulaString = formulaString.replace(set, result);
            }
        });
    }
    // console.log("STEP TWO", formulaString);

    if (typeof formulaString === 'string') {
        // Just multiplication for all values
        if (formulaString.includes('*') && !formulaString.includes('/') && !formulaString.includes('+')) {
            formulaString = formulaString.replace('(', '').replace(')', '');
            const values = formulaString.split('*');
            formulaString = values.reduce((a, b) => a * parseFloat(b), 1);
        } else if (formulaString.includes('/') && !formulaString.includes('*') && !formulaString.includes('+')) {
            // Just division 1 time
            const values = formulaString.split('/');
            formulaString = parseFloat(values[0]) / parseFloat(values[1]);
            // console.log("formulaString", values, formulaString);
        }
    }

    // console.log("STEP THREE", formulaString);

    // if (field.valueType === "dollar") {
    //     totalValue = totalValue.toFixed(2);
    // }

    if (typeof formulaString !== 'number') {
        console.error("A formula must convert to a number, ended up with " + formulaString);
    }
    // console.log(formulaString);
    return formulaString;
}