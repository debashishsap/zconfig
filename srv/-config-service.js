const cds = require("@sap/cds");

module.exports = cds.service.impl(async function (srv) {
    const { ConfigHeaders } = cds.entities; // Example entity reference
    console.log(cds.entities);
    srv.on('READ', "ConfigHeaders", async (req) => {
        console.log("==== Fetching Data ====");
        const results = await SELECT.from("ConfigHeaders");
        return results;
    });
});