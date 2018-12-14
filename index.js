function prepareTestsForDevices(deviceList) {
	return function setPagesToTest(pageList, callback) {
		pageList.forEach(page => {
			context(`${page}`, () => {
				deviceList.forEach(device => {
					context(`Testing on ${device.model}`, () => {
						beforeEach(() => {
							cy.viewport(device.width, device.height);
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
