// import { useState, useEffect } from 'react';

import Result from '../Elements/Result';

const SheetTotalsLostProductivity = ({ fields }) => {
    return (
        <div className="pure-g">
            <div className="pure-u-1-2">
                <div className="ResultGroup">
                    <Result field={fields[7]} />
                </div>
            </div>
            <div className="pure-u-1-2">
                <div className="ResultGroup">
                    <Result field={fields[8]} />
                </div>
            </div>

            <div className="pure-u-1 pure-u-md-1-2">
                <div className="ResultGroup">
                    <h4>{fields[9].name}</h4>
                    <div className="ResultTotals">
                        <Result field={fields[9]} />
                        <Result field={fields[10]} />
                        <Result field={fields[11]} />
                        <Result field={fields[12]} />
                    </div>
                </div>
            </div>

            <div className="pure-u-1 pure-u-md-1-2">
                <div className="ResultGroup">
                    <h4>{fields[13].name}</h4>
                    <div className="ResultTotals">
                        <Result field={fields[13]} />
                        <Result field={fields[14]} />
                        <Result field={fields[15]} />
                        <Result field={fields[16]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SheetTotalsLostProductivity;
