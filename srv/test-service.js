const cds = require("@sap/cds");

/**
 * Enumeration values for FieldControlType
 * @see https://github.com/SAP/odata-vocabularies/blob/master/vocabularies/Common.md#FieldControlType
 */
const FieldControl = {
    Mandatory: 7,
    Optional: 3,
    ReadOnly: 1,
    Inapplicable: 0,
};

module.exports = cds.service.impl(async function (srv) {

    srv.on('testService', async (req) => {
        return "Servicio funcionando correctamente";
    });
});