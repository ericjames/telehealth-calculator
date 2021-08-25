import fieldsLostProductivity from './config/fields-lostprod.json';
import fieldsPreventableAdmissions from './config/fields-prevad.json';

export default {
    sheets: [{
        title: "Lost Productivity",
        gid: 1657140223,
        fields: fieldsLostProductivity
    }, {
        title: "Preventable Admissions",
        gid: 1029269315,
        fields: fieldsPreventableAdmissions
    }],
}