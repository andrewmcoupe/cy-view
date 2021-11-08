/// <reference types="cypress" />
/// <reference types="node" />
function prepareTestsForDevices(deviceList) {
    return function setPagesToTest(pageList, callback) {
        pageList.forEach(function (page) {
            context("" + page, function () {
                deviceList.forEach(function (device) {
                    context("Testing on " + (Array.isArray(device) ? device[0] : device.model), function () {
                        beforeEach(function () {
                            if (Array.isArray(device)) {
                                cy.viewport(device[0], device[1]);
                            }
                            else {
                                cy.viewport(device.width, device.height);
                            }
                            cy.visit(page);
                        });
                        callback();
                    });
                });
            });
        });
    };
}
module.exports = prepareTestsForDevices;
