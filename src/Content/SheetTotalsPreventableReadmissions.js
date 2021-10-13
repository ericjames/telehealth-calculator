import Result from '../Elements/Result';

const SheetTotalsPreventableReadmissions = ({ fields }) => {
    // console.log("Total Prev", fields);
    if (!fields) return null;
    return (
        <div className="pure-g">
            <div className="pure-u-1">
                <div className="ResultGroup">
                    <h4>{fields[8].name}</h4>
                    <div className="ResultTotals">
                        <Result field={fields[8]} />
                        <Result field={fields[9]} />
                        <Result field={fields[10]} />
                        <Result field={fields[11]} />
                    </div>
                </div>
            </div>
        </div>
    )
}





export default SheetTotalsPreventableReadmissions