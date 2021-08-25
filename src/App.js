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

  // Initial setup of google data here, if anything breaks, start here
  async function getNewDataSheet(sheet) {
    const gSheet = doc.sheetsById[sheet.gid];
    const rows = await gSheet.getCellsInRange('A2:R15'); // This will grab everything after first row

    const indexOffset = 2; // Because the first row is missing, the offset is higher

    // Separate out data rows, each one serves a different purpose
    const columnIds = rows[sheet.columnIds - indexOffset];
    const titles = rows[sheet.titleRow - indexOffset];
    const subtitles = rows[sheet.subtitleRow - indexOffset];
    const helpText = rows[sheet.helpTextRow - indexOffset];
    const formulas = rows[sheet.formulaRow - indexOffset];

    // const initialValueRows = rows[sheet.initialValueRow - 1];
    // @FUTURE This does ingest all rows after the initial value
    const initialValueRows = rows.splice(sheet.initialValueRow - indexOffset);

    // console.log(columnIds, initialValueRows);

    // Critical model change, convert each Row into an Object { columnId: data }
    const rowData = initialValueRows.map((row) => {
      const newRow = {};
      row.forEach((value, i) => {
        newRow[columnIds[i]] = value;
      });
      return newRow;
    });

    // console.log(rowData);

    const newSheet = {
      gid: sheet.gid,
      title: sheet.title,
      fields: sheet.fields,
      rows: rowData
    };

    // Set the initial value data to override default sheet config fields
    // @FUTURE We are just setting the initial row for now, data model 
    // doesnt account for multiple rows at this time
    const initialValueRow = rowData[0];
    newSheet.fields.forEach((field) => {
      if (initialValueRow[field.columnId]) {
        field.value = initialValueRow[field.columnId].replace(",", "");
      }
    });

    return newSheet;
  }



  return (
    <div className="App">

      <header className="main-header"><h1>What is the cost of telehealth?</h1>
        <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut</span></header>

      <AppWithData dataSheets={dataSheets} setDataSheets={setDataSheets} />

    </div>
  );
}

export default App;
