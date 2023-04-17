import InputField from '../Elements/InputField';

// Input field templates gets pre-configured in respective config files

const InputArea = ({ dataSheet, setDataSheets }) => (
    <div className="InputArea">
        {dataSheet.fields.map((field, index) => (
            <InputField key={index} field={field} setDataSheets={setDataSheets} dataSheet={dataSheet} fieldIndex={index} />
        ))}
    </div>
)

export default InputArea