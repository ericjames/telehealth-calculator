import DisplayedNumber from '../Elements/DisplayedNumber';

const SheetTotalsPreventableAdmissions = ({ fields }) => {
    // console.log("Total Prev", fields);
    if (!fields) return null;
    return (
        <div className="pure-g">
            <div className="pure-u-1-3">
                <div className="ResultGroup">
                    <Result fields={fields} />
                </div>
            </div>
            <div className="pure-u-2-3">
                <div className="ResultGroup">
                    <h4>10 percent savings from preventable admissions</h4>
                    <div className="ResultTotals">
                        <Result2 fields={fields} />
                        <Result3 fields={fields} />
                        <Result4 fields={fields} />
                        <Result5 fields={fields} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Result = ({ fields }) => {
    const result = fields[1].value * fields[2].value;
    // console.log(fields, result);
    return (
        <div className="Result">
            <h4>Total preventable admissions per year</h4>
            <DisplayedNumber result={result} type="whole" />
        </div>
    )
}

const Result2 = ({ fields }) => {
    const result = fields[1].value * fields[2].value * fields[3].value * 0.1;
    return (
        <div className="Result">
            <h4>1 year</h4>
            <DisplayedNumber result={result} />
        </div>
    )
}


const Result3 = ({ fields }) => {
    const result = fields[1].value * fields[2].value * fields[3].value * 5;
    return (
        <div className="Result">
            <h4>5 years</h4>
            <DisplayedNumber result={result} />
        </div>
    )
}


const Result4 = ({ fields }) => {
    const result = fields[1].value * fields[2].value * fields[3].value * 10;
    return (
        <div className="Result">
            <h4>10 years</h4>
            <DisplayedNumber result={result} />
        </div>
    )
}

const Result5 = ({ fields }) => {
    const result = fields[1].value * fields[2].value * fields[3].value * 20;
    return (
        <div className="Result">
            <h4>20 years</h4>
            <DisplayedNumber result={result} />
        </div>
    )
}





export default SheetTotalsPreventableAdmissions