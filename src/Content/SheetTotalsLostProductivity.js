// import { useState, useEffect } from 'react';

import Result from '../Elements/Result';

const SheetTotalsLostProductivity = ({ fields }) => {
    // console.log("LOST", fields);
    return (
        <div className="pure-g">

            <div className="pure-u-1 pure-u-md-1-2">
                <div className="ResultGroup">
                    <h4>{fields[11].name}</h4>
                    <div className="ResultTotals">
                        <Result field={fields[11]} />
                        <Result field={fields[13]} />
                        <Result field={fields[15]} />
                        <Result field={fields[17]} />
                    </div>
                </div>
            </div>

            <div className="pure-u-1 pure-u-md-1-2">
                <div className="ResultGroup">
                    <h4>{fields[12].name}</h4>
                    <div className="ResultTotals">
                        <Result field={fields[12]} />
                        <Result field={fields[14]} />
                        <Result field={fields[16]} />
                        <Result field={fields[18]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SheetTotalsLostProductivity;
