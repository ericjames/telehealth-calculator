import SheetTotalsLostProductivity from './SheetTotalsLostProductivity'
import SheetTotalsPreventableAdmissions from './SheetTotalsPreventableAdmissions'

const SheetTotals = ({ dataSheet }) => {

    let comp = null;
    if (dataSheet.gid === 1657140223) {
        comp = <SheetTotalsLostProductivity fields={dataSheet.fields} />;
    } else if (dataSheet.gid === 1029269315) {
        comp = <SheetTotalsPreventableAdmissions fields={dataSheet.fields} />;
    }

    return (
        <div className="SheetTotals">
            <h3>Totals</h3>
            <div className="SheetTotals-inner">
                {comp}
            </div>
        </div>
    )
}

export default SheetTotals;