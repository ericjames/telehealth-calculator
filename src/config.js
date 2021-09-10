import fieldsLostProductivity from './config/fields-lostprod.json';
import fieldsPreventableAdmissions from './config/fields-prevad.json';

export default {

    setupInfoSheet: {
        gid: 709780975,
        readCellRange: 'A1:R15',
        columnIds: 2,
    },

    // This essentially represents the State model for the entire App
    setupDataSheets: [{
        gid: 1657140223,
        readCellRange: 'A1:R15',

        id: "lostprod",
        title: "Lost Productivity",
        fields: fieldsLostProductivity,
        rows: [],// for reference 

        // Actual row number in sheet
        columnIds: 2,
        fieldTypeRow: 3,
        titleRow: 4,
        subtitleRow: 5,
        helpTextRow: 6,
        formulaRow: 7,
        initialValueRow: 8,
    }, {
        gid: 1029269315,
        readCellRange: 'A1:R15',

        id: "prevadm",
        title: "Preventable Admissions",
        fields: fieldsPreventableAdmissions,
        rows: [], // for reference 

        // Actual row number in sheet
        columnIds: 2,
        fieldTypeRow: 3,
        titleRow: 4,
        subtitleRow: 5,
        helpTextRow: 6,
        formulaRow: 7,
        initialValueRow: 8,
    }]
}