import { useState } from 'react';

const HelpText = ({ text, style }) => {

    const [visible, setVisible] = useState(null);


    function showHelpText() {
        setVisible(true);
    }

    function leaveHelp() {
        setVisible(false);
    }

    if (text) {
        return (
            <div className="HelpText" style={style}>
                <button onMouseOver={showHelpText} onMouseOut={leaveHelp}>i</button>
                <div className={`text ${visible ? 'visible' : ''}`}>
                    {text}
                </div>
            </div>
        );
    }
    return null;
}

export default HelpText;