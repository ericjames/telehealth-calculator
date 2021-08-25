import { useState, useEffect } from 'react';

import { GoogleSpreadsheet } from 'google-spreadsheet';

import AppWithData from './AppWithData.js';

import config from './config';

const doc = new GoogleSpreadsheet(process.env.REACT_APP_GOOGLE_SHEET_ID);

// console.log(process.env);

function App() {

  const [dataSheets, setDataSheets] = useState(null);

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

    // Get sheet data as part of array
    let dataSheets = [];

    for (const sheet of config.sheets) {
      const newSheet = await getNewDataSheet(sheet);
      dataSheets.push(newSheet);
    }
    // console.log(dataSheets);
    setDataSheets(dataSheets);
  }

  // Merges google data into the config sheet data
  // @FUTURE possibly move into AppWithData as useEffect if data will constantly change
  async function getNewDataSheet(sheet) {
    const gSheet = doc.sheetsById[sheet.gid];
    const rows = await gSheet.getCellsInRange('A2:R15'); // This will grab everything after first row

    const indexOffset = 2; // Because the first row is missing, the offset is higher

    // Critical model change, convert each Row into an Object { columnId: data }
    const columnIds = rows[sheet.columnIds - indexOffset];
    const rowsModel = rows.map((row) => {
      const rowModel = {};
      row.forEach((value, i) => {
        rowModel[columnIds[i]] = value;
      });
      return rowModel;
    });

    // console.log(rowsModel);

    // Separate out data rows, each one serves a different purpose
    const fieldTypes = rowsModel[sheet.fieldTypeRow - indexOffset];
    const titles = rowsModel[sheet.titleRow - indexOffset];
    const subtitles = rowsModel[sheet.subtitleRow - indexOffset];
    const helpText = rowsModel[sheet.helpTextRow - indexOffset];
    const formulas = rowsModel[sheet.formulaRow - indexOffset];

    // const initialValueRows = rows[sheet.initialValueRow - 1];
    // @FUTURE This does ingest all rows after the initial value
    const initialValueRows = rowsModel.splice(sheet.initialValueRow - indexOffset);

    // console.log(rowData);

    // Setup final merged sheet
    const newSheet = {
      gid: sheet.gid,
      title: sheet.title,
      fields: sheet.fields,
      rows: rowsModel
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

      if (subtitles[field.columnId]) {
        field.subtitle = subtitles[field.columnId];
      }

    });

    return newSheet;
  }



  return (
    <div className="App">

      <header className="main-header">
        <div className="container">
          <h1>What is the cost of telehealth?</h1>
          <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut</span>
        </div>
      </header>

      <AppWithData dataSheets={dataSheets} setDataSheets={setDataSheets} />

    </div>
  );
}

export default App;
