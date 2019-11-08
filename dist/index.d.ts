interface DeviceList {
    model: string;
    width: number;
    height: number;
}
declare type Device = object;
declare type DeviceListArray = Device[];
declare type Urls = string[];
declare function prepareTestsForDevices(deviceList: DeviceListArray): (pageList: string[], callback: any) => void;
