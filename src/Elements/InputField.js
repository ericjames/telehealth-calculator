import { useState, useEffect } from 'react';

import DisplayedNumber from './DisplayedNumber';

const InputField = ({ setDataSheets, dataSheet, fieldIndex }) => {

    const field = dataSheet.fields[fieldIndex];

    const [originalValue, setOriginalValue] = useState(field.value);

    // Only show certain fields. The data still gets calculated in state 
    if (field.type === "hidden" || field.type === "total_both" || field.type === "total_low" || field.type === "total_high") return null;

    // console.log("INPUTFIELD", field);

    function onChange(e) {
        dataSheet.fields[fieldIndex].value = e.target.value;

        setDataSheets((state) => {
            state[dataSheet.index] = dataSheet;
            return [...state]
        });
    }

    function revertValue() {
        dataSheet.fields[fieldIndex].value = originalValue;

        setDataSheets(state => {
            state[dataSheet.index] = dataSheet;
            return [...state]
        });
    }

    const maxLength = getMaxLength(field);

    let style = {};
    if (field.fieldType === "text") {
        style.flexBasis = 250;
    }

    return (
        <div className={`InputField ${field.type}`} style={style}>
            <label>{field.name}</label>
            <div className="field">
                {field.type === "editable" ? <input type={field.fieldType} min={field.minValue} max={field.maxValue} step={field.stepValue} maxLength={maxLength} value={field.value} onChange={onChange} disabled={field.type === "locked" || field.type === "inline_total"} /> : null}
                {field.type === "editable" ? <button className="revert" onClick={revertValue}>⟳</button> : null}
                {field.type === "locked" || field.type === "inline_total" ? <DisplayedNumber value={field.value} valueType={field.valueType} /> : null}
            </div>
        </div>
    )
}

function getMaxLength(field) {
    let maxLength = 10; // a fair arbitrary default limit
    if (field.fieldType === "text") {
        maxLength = 20;
    } else {
        // All other field types are numbers

    }
    return maxLength
};


export default InputField;
