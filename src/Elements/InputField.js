import { useState, useEffect } from 'react';


const InputField = ({ setDataSheets, dataSheet, index }) => {

    const field = dataSheet.fields[index];

    const [originalValue, setOriginalValue] = useState(field.value);

    // console.log("INPUTFIELD", field);

    // useEffect(() => {
    //     if (!field.value) {
    //         field.value = 0;
    //         setDataSheets(fields => [...fields, field]);
    //     }
    // }, []);

    function onChange(e) {
        dataSheet.fields[index].value = e.target.value;
        setDataSheets(dataSheets => [...dataSheets, dataSheet]);
    }

    function revertValue() {
        dataSheet.fields[index].value = originalValue;
        setDataSheets(dataSheets => [...dataSheets, dataSheet]);
    }

    if (field.type === "hidden") return null; // The data still gets calculated in state 

    const maxLength = getMaxLength(field);

    return (
        <div className="InputField">
            <label>{field.name}</label>
            <div className="field">
                <input type={field.fieldType} min={field.minValue} max={field.maxValue} step={field.stepValue} maxLength={maxLength} value={field.value} onChange={onChange} disabled={field.type === "locked"} />
                {field.type === "editable" ? <button className="revert" onClick={revertValue}>X</button> : null }
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
