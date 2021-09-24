import SheetTotalsLostProductivity from './SheetTotalsLostProductivity'
import SheetTotalsPreventableAdmissions from './SheetTotalsPreventableAdmissions'
import SheetTotalsAvoidable from './SheetTotalsAvoidable';
import SheetTotalsPreventableReadmissions from './SheetTotalsPreventableReadmissions';

const SheetTotals = ({ dataSheet }) => {

    let comp = null;
    if (dataSheet.gid === 1657140223) {
        comp = <SheetTotalsLostProductivity fields={dataSheet.fields} />;
    } else if (dataSheet.gid === 1029269315) {
        comp = <SheetTotalsPreventableAdmissions fields={dataSheet.fields} />;
    } else if (dataSheet.gid === 1631211154) {
        comp = <SheetTotalsAvoidable fields={dataSheet.fields} />;
    } else if (dataSheet.gid === 1934186887) {
        comp = <SheetTotalsPreventableReadmissions fields={dataSheet.fields} />;
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