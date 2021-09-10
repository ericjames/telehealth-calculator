import DisplayedNumber from './DisplayedNumber';

const Result = ({ field }) => {
    // console.log(field);
    if (!field) return null;

    return (
        <div className="Result">
            {!field.subtitle ? <h4>{field.name}</h4> : null}
            {field.subtitle ? <h5>{field.subtitle}</h5> : null}
            <DisplayedNumber valueType={field.valueType} value={field.total} />
        </div>
    );
}
export default Result;