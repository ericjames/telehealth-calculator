import Result from '../Elements/Result';

const SheetTotalsPreventableAdmissions = ({ fields }) => {
    // console.log("Total Prev", fields);
    if (!fields) return null;
    return (
        <div className="pure-g">
            <div className="pure-u-1">
                <div className="ResultGroup">
                    <h4>{fields[6].name}</h4>
                    <div className="ResultTotals">
                        <Result field={fields[6]} />
                        <Result field={fields[7]} />
                        <Result field={fields[8]} />
                        <Result field={fields[9]} />
                    </div>
                </div>
            </div>
        </div>
    )
}





export default SheetTotalsPreventableAdmissions