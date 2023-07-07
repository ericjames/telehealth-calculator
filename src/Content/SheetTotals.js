import SheetTotalsAvoidable from './SheetTotalsAvoidable';
import SheetTotalsAvoidableTransCosts from './SheetTotalsAvoidableTransCosts';
import SheetTotalsLostProductivity from './SheetTotalsLostProductivity'
import SheetTotalsPreventableAdmissions from './SheetTotalsPreventableAdmissions'
import SheetTotalsPreventableERVisits from './SheetTotalsPreventableERVisits';
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
    } else if (dataSheet.gid === 1934186887) {
        comp = <SheetTotalsPreventableReadmissions fields={dataSheet.fields} />;
    } else if (dataSheet.gid === 1211509035) {
        comp = <SheetTotalsPreventableERVisits fields={dataSheet.fields} />;
    } else if (dataSheet.gid === 2094512645) {
        comp = <SheetTotalsAvoidableTransCosts fields={dataSheet.fields} />;
    }

    return (
        <div className="SheetTotals">
            <div className="SheetTotals-inner">
                {comp}
            </div>
        </div>
    )
}

export default SheetTotals;