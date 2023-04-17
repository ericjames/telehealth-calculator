import { useEffect, useState } from 'react';

import DisplayedNumber from './DisplayedNumber';
import HelpText from './HelpText';
import NumericFormat from 'react-number-format';

const InputField = ({ setDataSheets, dataSheet, fieldIndex, field }) => {

    // const field = dataSheet.fields[fieldIndex];

    const [originalValue, setOriginalValue] = useState(field.value);

    const [isEdited, setIsEdited] = useState(false);


    // Only show certain fields. The data still gets calculated in state 
    if (field.type === "hidden" || field.type === "total_both" || field.type === "total_low" || field.type === "total_high") return null;

    // console.log("INPUTFIELD", field);

    function onChange(e) {
        setIsEdited(true);
        dataSheet.fields[fieldIndex].value = e.target.value;

        setDataSheets((state) => {
            state[dataSheet.index] = dataSheet;
            return [...state]
        });
    }

    function revertValue() {
        setIsEdited(false);
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
        <div className={`InputField ${field.type} ${field.groupId ? 'group-' + field.groupId : ''}`} style={style}>
            <label>{field.name} <HelpText field={field} /></label>
            <div className="field">
                {field.type === "editable" && field.fieldType === "text" ? <input comma={field.comma} type={field.fieldType} min={field.minValue || 0} max={field.maxValue || 1000000} step={field.stepValue || 1} maxLength={maxLength} value={field.value} onChange={onChange} disabled={field.type === "locked" || field.type === "inline_total"} /> : null}
                {field.type === "editable" && field.fieldType === "number" ? <NumericFormat thousandSeparator="," min={field.minValue || 0} max={field.maxValue || 1000000} step={field.stepValue || 1} maxLength={maxLength} value={field.value} onChange={onChange} disabled={field.type === "locked" || field.type === "inline_total"} /> : null}

                {field.type === "editable" && isEdited ? <button className="revert" title="Revert" onClick={revertValue}>⟳</button> : null}
                {field.type === "locked" || field.type === "inline_total" ? <DisplayedNumber value={field.value} valueType={field.valueType} /> : null}
            </div>
            {/* {field.value} {field.valueType} */}
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
