# cy-view

### Run tests suite across multiple viewports

#### Installation

```sh
$ npm i --save-dev cy-view
```

#### Usage - CYPRESS MUST BE INSTALLED

| Parameter | Type  |
| --------- | ----- |
| devices   | Array |
| urls      | Array |

```javascript
const cyView = require("cy-view");

const devices = [
	{
		model: "macbook-15",
		width: 1440,
		height: 900
	},
	{
		model: "ipad-2",
		width: 768,
		height: 1024
	},
	{
		model: "iphone-6+",
		width: 414,
		height: 736
	}
];

// Add urls to test against
const urls = [
	"https://ao.com/product/idc8t3b-indesit-eco-time-condenser-tumble-dryer-white-38191-18.aspx",
	"https://ao.com/product/zwf01483wr-zanussi-lindo300-washing-machine-white-29672-1.aspx"
];

// Pass cy-view an array of devices structured like the devices constant above
const washingMachinePageTests = cyView(devices);

// Pass your urls constant in and your good to go!
washingMachinePageTests(urls, () => {
	describe("My tests running on all viewports across various URLs", () => {
		it("should test something...", () => {
			//...do yo' thang
		});
	});
});
```
