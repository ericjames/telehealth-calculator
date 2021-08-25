import InputField from '../Elements/InputField';


// Input field templates gets pre-configured in respective config files

const InputArea = ({dataSheet, setDataSheets}) => (<div className="InputArea">
    {dataSheet.fields.map((field, index) => (
        <InputField key={index} setDataSheets={setDataSheets} dataSheet={dataSheet} index={index} />
    ))}
</div>)

export default InputArea