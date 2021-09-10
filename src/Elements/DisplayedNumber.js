import NumberFormat from "react-number-format";
import millify from "millify";

const DisplayedNumber = ({ value, valueType }) => {

    let displayedNumber = '--';

    const numeral = parseFloat(value);

    if (numeral) {
        if (valueType && valueType === "number") {
            displayedNumber = Math.round(numeral);
        } else {
            displayedNumber = `$${millify(numeral, {
                precision: 1,
                space: true,
            }).replace("M", " million")}`;
        }
    } else {
        displayedNumber = "Error";
    }

    return (
        <div className="number">
            {/* <NumberFormat value={result} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={0} /> */}
            {displayedNumber}
        </div>
    )
}

export default DisplayedNumber