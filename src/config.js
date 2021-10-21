import fieldsLostProductivity from './config/fields-lostprod.json';
import fieldsPreventableAdmissions from './config/fields-prevad.json';
import avoidablenoshows from './config/fields-avoidablenoshows.json';
import prevReadm from './config/fields-preventable-readmissions.json';
import ervisits from './config/fields-preventable-ervisits.json';
import avoidabletrans from './config/fields-avoidable-trans.json';

export default {

    setupInfoSheet: {
        gid: 709780975,
        readCellRange: 'A1:R15',
        rowIndexOfColumnIds: 2,
    },

    // This essentially represents the State model for the entire App
    setupDataSheets: [
        {
            gid: 1631211154,
            active: false,
            readCellRange: 'A1:Z15', // Careful data could be beyond this range

            id: "avoidablenoshows",
            title: "Avoidable No Shows",
            fields: avoidablenoshows,
            rows: [], // for reference 

            // Actual row number in sheet
            rowIndexOfColumnIds: 2,
            fieldTypeRow: 3,
            titleRow: 4,
            subtitleRow: 5,
            helpTextRow: 6,
            formulaRow: 7,
            initialValueRow: 8,
        },

        {
            gid: 1029269315,
            active: false,
            readCellRange: 'A1:Z15', // Careful data could be beyond this range

            id: "prevadm",
            title: "Preventable Admissions",
            fields: fieldsPreventableAdmissions,
            rows: [], // for reference 

            // Actual row number in sheet
            rowIndexOfColumnIds: 2,
            fieldTypeRow: 3,
            titleRow: 4,
            subtitleRow: 5,
            helpTextRow: 6,
            formulaRow: 7,
            initialValueRow: 8,
        },


        {
            gid: 1934186887,
            active: false,
            readCellRange: 'A1:Z15', // Careful data could be beyond this range

            id: "prevreadm",
            title: "Preventable Readmissions",
            fields: prevReadm,
            rows: [],// for reference 

            // Actual row number in sheet
            rowIndexOfColumnIds: 2,
            fieldTypeRow: 3,
            titleRow: 4,
            subtitleRow: 5,
            helpTextRow: 6,
            formulaRow: 7,
            initialValueRow: 8,
        },


        {
            gid: 1211509035,
            active: true,
            readCellRange: 'A1:Z15', // Careful data could be beyond this range

            id: "prevervisits",
            title: "Preventable ER Visits",
            fields: ervisits,
            rows: [],// for reference 

            // Actual row number in sheet
            rowIndexOfColumnIds: 2,
            fieldTypeRow: 3,
            titleRow: 4,
            subtitleRow: 5,
            helpTextRow: 6,
            formulaRow: 7,
            initialValueRow: 8,
        },

        {
            gid: 1657140223,
            active: false,
            readCellRange: 'A1:Z15', // Careful data could be beyond this range

            id: "lostprod",
            title: "Lost Productivity",
            fields: fieldsLostProductivity,
            rows: [],// for reference 

            // Actual row number in sheet
            rowIndexOfColumnIds: 2,
            fieldTypeRow: 3,
            titleRow: 4,
            subtitleRow: 5,
            helpTextRow: 6,
            formulaRow: 7,
            initialValueRow: 8,
        },


        {
            gid: 2094512645,
            active: false,
            readCellRange: 'A1:Z15', // Careful data could be beyond this range

            id: "atc",
            title: "Avoidable Tranportation Costs",
            fields: avoidabletrans,
            rows: [],// for reference 

            // Actual row number in sheet
            rowIndexOfColumnIds: 2,
            fieldTypeRow: 3,
            titleRow: 4,
            subtitleRow: 5,
            helpTextRow: 6,
            formulaRow: 7,
            initialValueRow: 8,
        },


        
    ]
}