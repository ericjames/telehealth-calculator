import { useState, useEffect } from 'react';

import DisplayedNumber from '../Elements/DisplayedNumber';

const SheetTotalsLostProductivity = ({ fields }) => {

    return (
        <div className="pure-g">
            <div className="pure-u-1-2">
                <div className="ResultGroup">
                    <Result1 fields={fields} />
                </div>
            </div>
            <div className="pure-u-1-2">
                <div className="ResultGroup">
                    <Result2 fields={fields} />
                </div>
            </div>

            <div className="pure-u-1-2">
                <div className="ResultGroup">
                    <h4>10 percent recovered productivity on federal minimum wage</h4>
                    <div className="totals">
                        <Result3 fields={fields} />
                        <Result5 fields={fields} />
                        <Result7 fields={fields} />
                        <Result9 fields={fields} />
                    </div>
                </div>
            </div>

            <div className="pure-u-1-2">
                <div className="ResultGroup">
                    <h4>10 percent recovered productivity on median area wage</h4>
                    <div className="totals">
                        <Result4 fields={fields} />
                        <Result6 fields={fields} />
                        <Result8 fields={fields} />
                        <Result10 fields={fields} />
                    </div>
                </div>
            </div>
        </div>
    )
}


const Result1 = ({ fields }) => {
    const result = fields[1].value * fields[2].value * fields[3].value * fields[5].value * 12 * 8;

    return (
        <div className="Result">
            <h4>Lost productivity for one year at $7.25/hour</h4>
            <DisplayedNumber result={result} />
        </div>
    );
}


const Result2 = ({ fields }) => {

    const result = fields[1].value * fields[2].value * fields[3].value * fields[6].value * 12 * 8;

    return (
        <div className="Result">
            <h4>Lost productivity for 1 year at median area wage</h4>
            <DisplayedNumber result={result} />
        </div>
    );
}

// Federal

const Result3 = ({ fields }) => {

    const result = fields[1].value * fields[2].value * fields[3].value * fields[5].value * 12 * 8 * 0.1;

    return (
        <div className="Result">
            <b>1 year</b>
            <DisplayedNumber result={result} />
        </div>
    );
}

// Median

const Result4 = ({ fields }) => {

    const result = fields[1].value * fields[2].value * fields[3].value * fields[6].value * 12 * 8 * 0.1;

    return (
        <div className="Result">
            <b> 1 year </b>
            <DisplayedNumber result={result} />
        </div>
    );
}

// Federal

const Result5 = ({ fields }) => {

    const result = fields[1].value * fields[2].value * fields[3].value * fields[5].value * 12 * 8 * 0.1 * 5;

    return (
        <div className="Result">
            <b> 5 years</b>
            <DisplayedNumber result={result} />
        </div>
    );
}

// Median

const Result6 = ({ fields }) => {

    const result = fields[1].value * fields[2].value * fields[3].value * fields[6].value * 12 * 8 * 0.1 * 5;

    return (
        <div className="Result">
            <b>5 years </b>
            <DisplayedNumber result={result} />
        </div>
    );
}


// Federal

const Result7 = ({ fields }) => {

    const result = fields[1].value * fields[2].value * fields[3].value * fields[5].value * 12 * 8 * 0.1 * 10;

    return (
        <div className="Result">
            <b>10 years</b>
            <DisplayedNumber result={result} />
        </div>
    );
}

// Median

const Result8 = ({ fields }) => {

    const result = fields[1].value * fields[2].value * fields[3].value * fields[6].value * 12 * 8 * 0.1 * 10;

    return (
        <div className="Result">
            <b>10 years</b>
            <DisplayedNumber result={result} />
        </div>
    );
}


// Federal
const Result9 = ({ fields }) => {

    const result = fields[1].value * fields[2].value * fields[3].value * fields[5].value * 12 * 8 * 0.1 * 20;

    return (
        <div className="Result">
            <b>20 years</b>
            <DisplayedNumber result={result} />
        </div>
    );
}

// Median
const Result10 = ({ fields }) => {

    const result = fields[1].value * fields[2].value * fields[3].value * fields[6].value * 12 * 8 * 0.1 * 20;

    return (
        <div className="Result">
            <b>20 years</b>
            <DisplayedNumber result={result} />
        </div>
    );
}



export default SheetTotalsLostProductivity;
