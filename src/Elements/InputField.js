import { useState, useEffect } from 'react';


const InputField = ({ setDataSheets, dataSheet, fieldIndex }) => {

    const field = dataSheet.fields[fieldIndex];

    const [originalValue, setOriginalValue] = useState(field.value);

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

    if (field.type === "hidden") return null; // The data still gets calculated in state 

    const maxLength = getMaxLength(field);

    let style = {};
    if (field.fieldType === "text") {
        style.flexBasis = 300;
    }

    return (
        <div className="InputField" style={style}>
            <label>{field.name}</label>
            <div className="field">
                <input type={field.fieldType} min={field.minValue} max={field.maxValue} step={field.stepValue} maxLength={maxLength} value={field.value} onChange={onChange} disabled={field.type === "locked"} />
                {field.type === "editable" ? <button className="revert" onClick={revertValue}>⟳</button> : null}
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
