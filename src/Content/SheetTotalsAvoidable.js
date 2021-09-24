import Result from '../Elements/Result';

const SheetTotalsAvoidable = ({ fields }) => {
    // console.log("SheetTotalsAvoidable", fields);
    if (!fields) return null;
    return (
        <div className="pure-g">
            <div className="pure-u-1">
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
        </div>
    )
}





export default SheetTotalsAvoidable