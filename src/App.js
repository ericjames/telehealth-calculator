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

  async function getGoogleData() {
    await doc.useServiceAccountAuth({
      client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });
    await doc.loadInfo(); // loads document properties and worksheets

    // Get sheet data as part of array
    let dataSheets = [];

    for (const sheet of config.sheets) {
      const gSheet = doc.sheetsById[sheet.gid];
      const rows = await gSheet.getCellsInRange('A2:R15'); // This will grab everything after first row

      const headerIds = rows[0];
      const headerNames = rows[1];
      const dataRows = rows.splice(2);

      const newSheet = { 
        gid: sheet.gid, 
        fields: sheet.fields, 
        title: sheet.title,
        rows: [] 
      };
      dataRows.forEach((row) => {
        const newRow = {};
        if (row[0] === "TOTALS")
          return;
        row.forEach((value, i) => {
          newRow[headerIds[i]] = value;
        });
        newSheet.rows.push(newRow);
      });

      // We only ingest the first row of county data to fill in the fields obj
      const rowPlaceholder = newSheet.rows[0];
      newSheet.fields.forEach((field) => {
        if (rowPlaceholder[field.header_id]) {
          field.value = rowPlaceholder[field.header_id].replace(",", "");
        }
      });

      dataSheets.push(newSheet);
    }
    // console.log(dataSheets);
    setDataSheets(dataSheets);
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
