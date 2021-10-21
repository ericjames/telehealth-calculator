// import NumberFormat from "react-number-format";
import millify from "millify";

const DisplayedNumber = ({ value, valueType }) => {

    let displayedNumber = '--';

    const numeral = parseFloat(value);

    if (numeral) {
        if (valueType === "number") {
            displayedNumber = millify(numeral, {
                precision: 2,
                decimalSeparator: ","
            });
        } else if (valueType === "percent") {
            displayedNumber = millify(numeral, {
                precision: 2,
                decimalSeparator: "."
            });
        } else if (valueType === "dollar") {
            displayedNumber = `$${millify(numeral, {
                precision: 1,
                space: true,
            }).replace("M", " M")}`;
        } else {
            displayedNumber = Math.round(numeral);
        }
    } else {
        displayedNumber = "---";
    }

    return (
        <div className="number">
            {/* <NumberFormat value={result} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={0} /> */}
            {displayedNumber}
        </div>
    )
}

export default DisplayedNumber