import DisplayedNumber from '../Elements/DisplayedNumber.js';

const TotalsBanner = ({ dataSheets, text }) => {

    if (!dataSheets) return null;

    let lowBoundFieldSets = [];
    let highBoundFieldSets = [];
    dataSheets.forEach((sheet, i) => {
        if (!sheet.active) return; // @NOTE only active sheets calculate a grand total
        lowBoundFieldSets[i] = [];
        highBoundFieldSets[i] = [];
        sheet.fields.forEach((field) => {
            // console.log("field.type", field.type);
            if (field.type === 'total_low' || field.type === 'total_both') {
                lowBoundFieldSets[i].push(field);
            }
            if (field.type === 'total_high' || field.type === 'total_both') {
                highBoundFieldSets[i].push(field);
            }
        });
    })
    // console.log(lowBoundFieldSets, highBoundFieldSets);

    let lowBoundTotals = [];
    let highBoundTotals = [];
    lowBoundFieldSets.forEach((fieldset) => {
        fieldset.forEach((field, i) => {
            if (lowBoundTotals[i]) {
                lowBoundTotals[i].value += parseFloat(field.value);
            } else {
                lowBoundTotals[i] = { subtitle: field.subtitle };
                lowBoundTotals[i].value = parseFloat(field.value);
            }
        });
    });
    highBoundFieldSets.forEach((fieldset) => {
        fieldset.forEach((field, i) => {
            if (highBoundTotals[i]) {
                highBoundTotals[i].value += parseFloat(field.value);
            } else {
                highBoundTotals[i] = { subtitle: field.subtitle };
                highBoundTotals[i].value = parseFloat(field.value);
            }
        });
    })
    // console.log(lowBoundTotals, highBoundTotals);

    return (
        <div className="TotalsBanner">
            <div className="container">
                <header><h2>{text && text.bannerTitle}</h2></header>

                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-2 total-set">

                        <h3>Low</h3>

                        {lowBoundTotals.map((total, i) => (
                            <div key={i} className="value">
                                {total.subtitle}
                                <DisplayedNumber key={i} value={total.value} valueType="dollar" />
                            </div>
                        ))}
                    </div>
                    <div className="pure-u-1 pure-u-md-1-2 total-set">

                        <h3>High</h3>

                        {highBoundTotals.map((total, i) => (
                            <div key={i} className="value">
                                {total.subtitle}
                                <DisplayedNumber key={i} value={total.value} valueType="dollar" />
                            </div>
                        ))}
                    </div>

                </div>




            </div>
        </div>
    )
};



export default TotalsBanner