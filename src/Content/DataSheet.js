import { useState, useEffect } from 'react';


import InputArea from './InputArea';
import SheetTotals from './SheetTotals';

const DataSheet = ({ setDataSheets, dataSheet }) => {

    if (!dataSheet || !dataSheet.fields) return null;

    // console.log(dataSheet);
    return (
        <div className="DataSheet">
            <h2>{dataSheet.title}</h2>
            <InputArea dataSheet={dataSheet} setDataSheets={setDataSheets} />
            <SheetTotals dataSheet={dataSheet} />
        </div>
    )
};


export default DataSheet