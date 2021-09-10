import DisplayedNumber from './DisplayedNumber';

const Result = ({ field }) => {
    // console.log(field);
    if (!field) return null;

    const title = field.name;
    const subtitle = field.subtitle;
    const result = field.total;

    return (
        <div className="Result">
            {!subtitle ? <h4>{title}</h4> : null}
            {subtitle ? <h5>{subtitle}</h5> : null}
            <DisplayedNumber result={result} />
        </div>
    );
}
export default Result;