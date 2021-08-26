import fieldsLostProductivity from './config/fields-lostprod.json';
import fieldsPreventableAdmissions from './config/fields-prevad.json';

export default {

    // This essentially represents the State model for the entire App
    seedDataSheets: [{
        id: "lostprod",
        title: "Lost Productivity",
        gid: 1657140223,
        fields: fieldsLostProductivity,
        rows: [],

        // Actual row number in sheet
        columnIds: 2,
        fieldTypes: 3,
        titleRow: 4,
        subtitleRow: 5,
        helpTextRow: 6,
        formulaRow: 7,
        initialValueRow: 8,
    }, {
        id: "prevadm",
        title: "Preventable Admissions",
        gid: 1029269315,
        fields: fieldsPreventableAdmissions,
        rows: [],

        // Actual row number in sheet
        columnIds: 2,
        fieldTypes: 3,
        titleRow: 4,
        subtitleRow: 5,
        helpTextRow: 6,
        formulaRow: 7,
        initialValueRow: 8,
    }]
}