import sanitizeHtml from 'sanitize-html'

const Overlay = ({ id, currentPage, title, text, setCurrentPage }) => {

    function renderText() {
        if (!text) return null;
        // console.log(text);
        let textArray = text.split(/^/gm);
        // console.log(textArray);
        if (textArray) {
            return textArray.map((line, i) => {
                let textWithLinks = line.replace(/(https:\/\/[\w\d.\/-]*)/gi, '<a target="new" href="$1">$1</a>');
                textWithLinks = line.replace(/^\n/gim, '<br />');
                // console.log(textWithLinks);

                const clean = sanitizeHtml(textWithLinks, {
                    allowedTags: ['b', 'br', 'a', 'p', 'em', 'strong'],
                });

                return <p key={i} dangerouslySetInnerHTML={{ __html: clean }}></p>;
            })
        }
        return <p>{text}</p>;
    }

    return (
        <div className="Overlay About" style={{ opacity: currentPage === id ? 1 : 0, display: currentPage === id ? 'block' : 'none' }}>
            <div className="container">
                <button className="dismiss" onClick={() => setCurrentPage('home')}>X</button>
                <h1>{title}</h1>
                {renderText()}
            </div>
        </div>
    )
}

export default Overlay;
