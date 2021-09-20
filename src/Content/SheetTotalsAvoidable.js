import Result from '../Elements/Result';

const SheetTotalsAvoidable = ({ fields }) => {
    console.log("SheetTotalsAvoidable", fields);
    if (!fields) return null;
    return (
        <div className="pure-g">
            <div className="pure-u-1-3">
                <div className="ResultGroup">
                    <Result field={fields[7]} />
                    <Result field={fields[8]} />
                    <Result field={fields[9]} />
                </div>
            </div>
            <div className="pure-u-2-3">
                <div className="ResultGroup">
                    <h4>{fields[11].name}</h4>
                    <div className="ResultTotals">
                        <Result field={fields[11]} />
                        <Result field={fields[12]} />
                        <Result field={fields[13]} />
                        <Result field={fields[14]} />
                    </div>
                </div>
            </div>
        </div>
    )
}





export default SheetTotalsAvoidable