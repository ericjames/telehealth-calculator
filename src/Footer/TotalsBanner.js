
import DisplayedNumber from '../Elements/DisplayedNumber.js';

const TotalsBanner = ({ dataSheets, text }) => {

    if (!dataSheets) return null;

    let lowBoundValues = [];
    let highBoundValues = [];
    dataSheets.forEach((sheet, i) => {
        lowBoundValues[i] = [];
        highBoundValues[i] = [];
        sheet.fields.forEach((field) => {
            console.log("field.type", field.type);
            if (field.type === 'total_low' || field.type === 'total_both') {
                lowBoundValues[i].push(field.total);
            }
            if (field.type === 'total_high' || field.type === 'total_both') {
                highBoundValues[i].push(field.total);
            }
        });
    })
    // console.log(lowBoundValues, highBoundValues);

    let lowBoundTotals = [];
    let highBoundTotals = [];
    lowBoundValues.forEach((sheetValues) => {
        sheetValues.forEach((value, i) => {
            if (lowBoundTotals[i]) {
                lowBoundTotals[i] += parseFloat(value);
            } else {
                lowBoundTotals[i] = parseFloat(value);
            }
        });
    });
    highBoundValues.forEach((sheetValues) => {
        sheetValues.forEach((value, i) => {
            if (highBoundTotals[i]) {
                highBoundTotals[i] += parseFloat(value);
            } else {
                highBoundTotals[i] = parseFloat(value);
            }
        });
    })
    // console.log(lowBoundTotals, highBoundTotals);

    return (
        <div className="TotalsBanner">
            <div className="container">
                <header><h2>{text && text.bannerTitle}</h2></header>

                <div className="pure-g">
                    <div className="pure-u-1-2">

                        <h3>Low</h3>
                        {lowBoundTotals.map((total, i) => (
                            <div key={i} className="pure-u-1-4">
                                <DisplayedNumber key={i} value={total} valueType="dollar" />
                            </div>
                        ))}
                    </div>
                    <div className="pure-u-1-2">

                        <h3>High</h3>
                        {highBoundTotals.map((total, i) => (
                            <div key={i} className="pure-u-1-4">
                                <DisplayedNumber key={i} value={total} valueType="dollar" />
                            </div>
                        ))}
                    </div>

                </div>




            </div>
        </div>
    )
};



export default TotalsBanner