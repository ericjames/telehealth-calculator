
import { useEffect, useState } from "react";

const Navigation = ({ dataSheets, text, currentPage, setCurrentPage, selectedSheet, setSelectedSheet }) => {

    useEffect(() => {
        document.body.addEventListener("click", toggleClosed, true);
    }, []);

    // @TODO text can pass navigation link button title

    const [opened, setOpened] = useState(false);

    if (!dataSheets) return null;

    const sheetGids = dataSheets.map((sheet) => {
        return {
            gid: sheet.gid,
            title: sheet.title
        };
    })

    function setOverlay(name) {
        if (currentPage === name) {
            setCurrentPage('home');
        } else {
            setCurrentPage(name);
        }
    }

    function toggleSheet(e) {
        const ele = e.target.children[0];
        const value = ele.value;
        console.log(ele, value);
        ele.checked = true;
        // setSelectedSheet(value);
    }

    function toggleMenu(e) {
        setOpened(!opened);
    }

    function toggleClosed(e) {
        if (['checkbox-toggle', 'nav-toggle', 'checkbox-dropdown opened'].indexOf(e.target.className) === -1) {
            setOpened(false);
        }
    }

    return (
        <nav className="Navigation">
            {/* <button onClick={() => setPage('home')}>Home</button> */}
            <div className="nav-separator checkbox-menu">
                <div className="nav-toggle" onClick={toggleMenu}>Toggle Variables {!opened ? '▼' : '▲'}</div>

                <div className={`checkbox-dropdown ${opened ? 'opened' : ''}`} style={{ height: !opened ? 0 : 350 }}>
                    {sheetGids.map((sheet) => (
                        <div key={sheet.gid} className="checkbox-toggle" onClick={toggleSheet}>
                            <input type="checkbox" value={sheet.gid} />
                            {sheet.title}
                        </div>
                    ))}
                </div>
            </div>

            <div className="nav-separator">
                <button className="nav-toggle" onClick={() => setOverlay('about')}>About</button>
            </div>
            <div className="nav-separator">
                <button className="nav-toggle" onClick={() => setOverlay('sources')}>Sources</button>
            </div>
        </nav >
    )
};

export default Navigation;