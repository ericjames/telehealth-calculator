import { useState } from 'react';


const HelpText = ({ field }) => {

    const [visible, setVisible] = useState(null);


    function showHelpText() {
        setVisible(true);
    }

    function leaveHelp() {
        setVisible(false);
    }

    if (field.helpText && field.helpText.length > 0) {
        return (
            <div className="HelpText">
                <button onMouseOver={showHelpText} onMouseOut={leaveHelp}>i</button>
                <div className={`text ${visible ? 'visible' : ''}`}>
                    {field.helpText}
                </div>
            </div>
        );
    }
    return null;
}

export default HelpText;