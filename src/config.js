import fieldsLostProductivity from './config/fields-lostprod.json';
import fieldsPreventableAdmissions from './config/fields-prevad.json';
import avoidablenoshows from './config/fields-avoidablenoshows.json';

export default {

    setupInfoSheet: {
        gid: 709780975,
        readCellRange: 'A1:R15',
        rowIndexOfColumnIds: 2,
    },

    // This essentially represents the State model for the entire App
    setupDataSheets: [{
        gid: 1631211154,
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
    }, {
        gid: 1029269315,
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
    }, {
        gid: 1657140223,
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
    }
    ]
}