import avoidablenoshows from './config/fields-avoidablenoshows.json';
import avoidabletrans from './config/fields-avoidable-trans.json';
import ervisits from './config/fields-preventable-ervisits.json';
import fieldsLostProductivity from './config/fields-lostprod.json';
import fieldsPreventableAdmissions from './config/fields-prevad.json';
import prevReadm from './config/fields-preventable-readmissions.json';

export default {

    setupInfoSheet: {
        gid: 709780975,
        readCellRange: 'A1:R15',
        rowIndexOfColumnIds: 2,
    },

    // This essentially represents the State model for the entire App
    setupDataSheets: [
        // {
        //     gid: 1631211154,
        //     active: false,
        //     readCellRange: 'A1:Z15', // Careful data could be beyond this range

        //     id: "avoidablenoshows",
        //     sheetTitle: "Avoidable No Shows",
        //     fields: avoidablenoshows,
        //     rows: [], // for reference 

        //     // Actual row number in sheet
        //     sheetTitleRow: 1,
        //     rowIndexOfColumnIds: 2,
        //     fieldTypeRow: 3,
        //     titleRow: 4,
        //     subtitleRow: 5,
        //     helpTextRow: 6,
        //     formulaRow: 7,
        //     initialValueRow: 8,
        // },

        {
            gid: 1029269315,
            active: false,
            readCellRange: 'A1:Z15', // Careful data could be beyond this range

            id: "prevadm",
            sheetTitle: "Preventable Admissions",
            fields: fieldsPreventableAdmissions,
            rows: [], // for reference 

            // Actual row number in sheet
            sheetTitleRow: 1,
            sheetHelpTextRow: 2,
            rowIndexOfColumnIds: 3,
            fieldTypeRow: 4,
            titleRow: 5,
            subtitleRow: 6,
            helpTextRow: 7,
            formulaRow: 8,
            initialValueRow: 9,
        },


        {
            gid: 1934186887,
            active: false,
            readCellRange: 'A1:Z15', // Careful data could be beyond this range

            id: "prevreadm",
            sheetTitle: "Preventable Readmissions",
            fields: prevReadm,
            rows: [],// for reference 

            // Actual row number in sheet
            sheetTitleRow: 1,
            sheetHelpTextRow: 2,
            rowIndexOfColumnIds: 3,
            fieldTypeRow: 4,
            titleRow: 5,
            subtitleRow: 6,
            helpTextRow: 7,
            formulaRow: 8,
            initialValueRow: 9,
        },


        {
            gid: 1211509035,
            active: true,
            readCellRange: 'A1:Z15', // Careful data could be beyond this range

            id: "prevervisits",
            sheetTitle: "Preventable ER Visits",
            fields: ervisits,
            rows: [],// for reference 

            // Actual row number in sheet
            sheetTitleRow: 1,
            sheetHelpTextRow: 2,
            rowIndexOfColumnIds: 3,
            fieldTypeRow: 4,
            titleRow: 5,
            subtitleRow: 6,
            helpTextRow: 7,
            formulaRow: 8,
            initialValueRow: 9,
        },

        {
            gid: 1657140223,
            active: false,
            readCellRange: 'A1:Z15', // Careful data could be beyond this range

            id: "lostprod",
            sheetTitle: "Lost Productivity",
            fields: fieldsLostProductivity,
            rows: [],// for reference 

            // Actual row number in sheet
            sheetTitleRow: 1,
            sheetHelpTextRow: 2,
            rowIndexOfColumnIds: 3,
            fieldTypeRow: 4,
            titleRow: 5,
            subtitleRow: 6,
            helpTextRow: 7,
            formulaRow: 8,
            initialValueRow: 9,
        },


        {
            gid: 2094512645,
            active: false,
            readCellRange: 'A1:Z15', // Careful data could be beyond this range

            id: "atc",
            sheetTitle: "Avoidable Tranportation Costs",
            fields: avoidabletrans,
            rows: [],// for reference 

            // Actual row number in sheet
            sheetTitleRow: 1,
            sheetHelpTextRow: 2,
            rowIndexOfColumnIds: 3,
            fieldTypeRow: 4,
            titleRow: 5,
            subtitleRow: 6,
            helpTextRow: 7,
            formulaRow: 8,
            initialValueRow: 9,
        },



    ]
}