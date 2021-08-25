import fieldsLostProductivity from './config/fields-lostprod.json';
import fieldsPreventableAdmissions from './config/fields-prevad.json';

export default {
    sheets: [{
        title: "Lost Productivity",
        gid: 1657140223,
        fields: fieldsLostProductivity,

        // Actual row number in sheet
        columnIds: 2,
        fieldTypes: 3,
        titleRow: 4,
        subtitleRow: 5,
        helpTextRow: 6,
        formulaRow: 7,
        initialValueRow: 8,
    }, {
        title: "Preventable Admissions",
        gid: 1029269315,
        fields: fieldsPreventableAdmissions,

        // Actual row number in sheet
        columnIds: 2,
        fieldTypes: 3,
        titleRow: 4,
        subtitleRow: 5,
        helpTextRow: 6,
        formulaRow: 7,
        initialValueRow: 8,
    }],
}