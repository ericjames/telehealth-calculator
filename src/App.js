import { useState, useEffect } from 'react';

import { GoogleSpreadsheet } from 'google-spreadsheet';

import AppWithData from './AppWithData.js';
import Navigation from './Elements/Navigation.js';
import Overlay from './Overlay.js';

import config from './config.js';

const doc = new GoogleSpreadsheet(process.env.REACT_APP_GOOGLE_SHEET_ID);

function App() {

  const [dataSheets, setDataSheets] = useState(null);
  const [text, setText] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  const [selectedSheet, setSelectedSheet] = useState(config.initialSheetGid);

  useEffect(() => {
    getGoogleData();
  }, [])

  // Seeds app with google data
  async function getGoogleData() {
    await doc.useServiceAccountAuth({
      client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });
    await doc.loadInfo(); // loads document properties and worksheets
    addDataSheets();
    addInfoSheet();
  }

  async function addInfoSheet() {
    const sheet = config.setupInfoSheet;

    let newSheet = null;

    const rows = await getGoogleSpreadsheetRows(sheet.gid, sheet.rowIndexOfColumnIds, sheet.readCellRange);
    const indexOffset = 1;

    newSheet = {};
    rows.forEach((row, i) => {
      if (i > 1) { // skip id row
        if (row.type && row.unique_id) {
          newSheet[row.unique_id] = row.text;
        }
      }
    });
    // console.log("setText", newSheet);
    localStorage.setItem(sheet.gid, JSON.stringify(newSheet));

    // if (!localStorage.getItem(sheet.gid)) {

    // } else {
    //   newSheet = JSON.parse(localStorage.getItem(sheet.gid));
    // }

    setText(newSheet);
  }

  async function addDataSheets() {
    let dataSheets = []
    for (let i = 0; i < config.setupDataSheets.length; i++) {
      const setupSheet = config.setupDataSheets[i];

      let newSheet = null;

      newSheet = await getNewDataSheet(setupSheet, i)
      localStorage.setItem(setupSheet.gid, JSON.stringify(newSheet));

      // if (!localStorage.getItem(setupSheet.gid)) {
      //   console.log("Get New Sheet");
      //   newSheet = await getNewDataSheet(setupSheet, i)
      //   localStorage.setItem(setupSheet.gid, JSON.stringify(newSheet));
      // } else {
      //   console.log("OLD Sheet");
      //   newSheet = JSON.parse(localStorage.getItem(setupSheet.gid));
      // }

      dataSheets.push(newSheet);
    };
    // console.log("OK", dataSheets);
    setDataSheets(dataSheets);
  }

  async function getGoogleSpreadsheetRows(gid, rowIndexOfColumnIds, cellRange) {
    const gSheet = doc.sheetsById[gid];
    const gSheetRows = await gSheet.getCellsInRange(cellRange); // This will grab everything after first row
    // Critical model change, convert each Row into an Object { columnId: data }
    const cellIds = gSheetRows[rowIndexOfColumnIds - 1];
    const rows = gSheetRows.map((row) => {
      const rowModel = {};
      row.forEach((value, i) => {
        rowModel[cellIds[i]] = value;
      });
      return rowModel;
    });
    return rows;
  }

  async function getGoogleSpreadsheetColumns(gid, rowIndexOfColumnIds, cellRange) {
    const gSheet = doc.sheetsById[gid];
    const gSheetRows = await gSheet.getCellsInRange(cellRange); // This will grab everything after first row

    // console.log(gSheetRows); return;

    const columnIds = gSheetRows[rowIndexOfColumnIds - 1];

    const columns = columnIds.map((id) => {
      return { columnId: id };
    });

    const rowIdIndex = 0;
    gSheetRows.forEach((row, i) => {
      const rowId = row[rowIdIndex];
      if (!rowId) return;
      row.forEach((cellValue, rowIndex) => {
        if (rowIndex > rowIdIndex) {
          columns[rowIndex][rowId] = cellValue;
        }
      })
    });

    return columns;
  }

  // Merges google data into the config sheet model
  // @FUTURE possibly move into AppWithData as useEffect if data will constantly change
  async function getNewDataSheet(sheet, index) {

    const rows = await getGoogleSpreadsheetRows(sheet.gid, sheet.rowIndexOfColumnIds, sheet.readCellRange);

    const indexOffset = 1;

    // Separate out data rows, each one serves a different purpose
    const fieldTypeRow = rows[sheet.fieldTypeRow - indexOffset];
    const titles = rows[sheet.titleRow - indexOffset];
    const subtitles = rows[sheet.subtitleRow - indexOffset];
    const helpText = rows[sheet.helpTextRow - indexOffset];
    const formulas = rows[sheet.formulaRow - indexOffset];

    // const initialValueRows = rows[sheet.initialValueRow - 1];
    // @FUTURE This does ingest all rows after the initial value
    const initialValueRows = rows.splice(sheet.initialValueRow - indexOffset);
    // console.log("ROWS", rows);

    // console.log(rowData);

    // Merge overwrite 
    const fields = sheet.fields;

    // Setup final merged sheet
    const newSheet = {
      index, // Used for updating this parent state in child components
      id: sheet.id,
      gid: sheet.gid,
      title: sheet.title,
      fields, // This is synonymous with columns of the spreadsheet
    };

    // Set the initial value data to override default sheet config fields
    newSheet.fields.forEach((field) => {
      // We just use the FIRST row of the seed data 
      if (initialValueRows[0][field.columnId]) {
        field.value = initialValueRows[0][field.columnId].replace(",", ""); // Typically numbers with ,
      }
      // And also the other defaults
      if (titles[field.columnId]) {
        field.name = titles[field.columnId];
      }
      if (subtitles[field.columnId]) {
        field.subtitle = subtitles[field.columnId];
      }
      if (formulas[field.columnId]) {
        field.formula = formulas[field.columnId];
      }
      if (helpText[field.columnId]) {
        field.helpText = helpText[field.columnId];
      }
      if (fieldTypeRow && fieldTypeRow[field.columnId]) {
        field.type = fieldTypeRow[field.columnId];
      }

    });

    // console.log("New Sheet", newSheet);

    return newSheet;
  }

  console.log(text);

  return (
    <div className="App">

      <header className="main-header">
        <div className="container">
          <h1>{text && text.headerTitle || "..."}</h1>
          <span>{text && text.headerText || "..."}</span>
        </div>
      </header>

      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} selectedSheet={selectedSheet} setSelectedSheet={setSelectedSheet} />

      <div className="Front" style={{ opacity: currentPage === 'home' ? 1 : 0.2 }}>

        {!dataSheets ? <div className="Loading">Loading...</div> : null}

        <AppWithData text={text} selectedSheet={selectedSheet} dataSheets={dataSheets} setDataSheets={setDataSheets} setCurrentPage={setCurrentPage} />
      </div>

      <Overlay id="about" title={text && text.aboutTitle} text={text && text.aboutText} currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <Overlay id="sources" title={text && text.sourcesTitle} text={text && text.sourcesText} currentPage={currentPage} setCurrentPage={setCurrentPage} />

    </div>
  );
}

export default App;
