/// <reference types="cypress" />
/// <reference types="node" />

interface DeviceList {
	model: string;
	width: number;
	height: number;
}

type Device = object;

type DeviceListArray = Device[];

type Urls = string[];

function prepareTestsForDevices(deviceList: DeviceListArray) {
	return function setPagesToTest(pageList: Urls, callback: any): void {
		pageList.forEach((page: string) => {
			context(`${page}`, () => {
				deviceList.forEach((device: DeviceList) => {
					context(`Testing on ${Array.isArray(device) ? device[0] : device.model}`, () => {
						beforeEach(() => {
                            if (Array.isArray(device)) {
                                cy.viewport(device[0], device[1]);
                            } else {
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
