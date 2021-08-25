import fieldsLostProductivity from './config/fields-lostprod.json';
import fieldsPreventableAdmissions from './config/fields-prevad.json';

export default {
    sheets: [{
        title: "Lost Productivity",
        gid: 1657140223,
        fields: fieldsLostProductivity,

        // Actual row number in sheet
        columnIds: 2,
        titleRow: 3,
        subtitleRow: 4,
        helpTextRow: 5,
        formulaRow: 6,
        initialValueRow: 7,
    }, {
        title: "Preventable Admissions",
        gid: 1029269315,
        fields: fieldsPreventableAdmissions,

        // Actual row number in sheet
        columnIds: 2,
        titleRow: 3,
        subtitleRow: 4,
        helpTextRow: 5,
        formulaRow: 6,
        initialValueRow: 7,
    }],
}