import NumberFormat from "react-number-format";
import millify from "millify";

const DisplayedNumber = ({ result, type }) => {

    let displayedNumber = '--';

    const numeral = parseFloat(result);

    if (numeral) {
        if (type === "whole") {
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