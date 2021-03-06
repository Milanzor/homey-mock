/**
 *
 * @type {{App: App, ApiApp: ApiApp, ManagerCron: ManagerCron, ManagerBLE: ManagerBLE, Image: Image, LedringAnimation: LedringAnimation, ZwaveCommandClass: ZwaveCommandClass, SimpleClass: SimpleClass, ManagerImages: ManagerImages, SignalInfrared: SignalInfrared, ManagerArp: ManagerArp, ManagerNotifications: ManagerNotifications, CloudWebhook: CloudWebhook, ManagerAudio: ManagerAudio, BleDescriptor: BleDescriptor, BleAdvertisement: BleAdvertisement, LedringAnimationSystem: LedringAnimationSystem, Device: Device, FlowToken: FlowToken, ManagerApps: ManagerApps, ManagerDrivers: ManagerDrivers, Signal433: Signal433, LedringAnimationSystemProgress: LedringAnimationSystemProgress, ManagerSettings: ManagerSettings, ManagerSpeechOutput: ManagerSpeechOutput, BleCharacteristic: BleCharacteristic, BlePeripheral: BlePeripheral, FlowCard: FlowCard, ManagerRF: ManagerRF, ManagerGeolocation: ManagerGeolocation, ManagerCloud: ManagerCloud, CronTask: CronTask, FlowCardTrigger: FlowCardTrigger, ManagerApi: ManagerApi, FlowCardCondition: FlowCardCondition, Driver: Driver, CloudOAuth2Callback: CloudOAuth2Callback, Notification: Notification, Signal: Signal, ManagerZwave: ManagerZwave, ManagerNFC: ManagerNFC, ManagerSpeechInput: ManagerSpeechInput, FlowCardTriggerDevice: FlowCardTriggerDevice, InsightsLog: InsightsLog, Signal868: Signal868, ZigBeeCluster: ZigBeeCluster, BleService: BleService, ZigBeeEndpoint: ZigBeeEndpoint, Speaker: Speaker, ManagerFlow: ManagerFlow, FlowCardAction: FlowCardAction, ZigBeeNode: ZigBeeNode, ManagerClock: ManagerClock, ManagerI18n: ManagerI18n, ZwaveNode: ZwaveNode, ManagerZigBee: ManagerZigBee, Api: Api, FlowArgument: FlowArgument, ManagerInsights: ManagerInsights, ManagerLedring: ManagerLedring}}
 */
module.exports = {
    Api: require('./includes/Api/Api'),
    ApiApp: require('./includes/ApiApp/ApiApp'),
    App: require('./includes/App/App'),
    BleAdvertisement: require('./includes/Ble/BleAdvertisement'),
    BleCharacteristic: require('./includes/Ble/BleCharacteristic'),
    BleDescriptor: require('./includes/Ble/BleDescriptor'),
    BlePeripheral: require('./includes/Ble/BlePeripheral'),
    BleService: require('./includes/Ble/BleService'),
    CloudOAuth2Callback: require('./includes/Cloud/CloudOAuth2Callback'),
    CloudWebhook: require('./includes/Cloud/CloudWebhook'),
    CronTask: require('./includes/Cron/CronTask'),
    Device: require('./includes/Device/Device'),
    Driver: require('./includes/Driver/Driver'),
    FlowArgument: require('./includes/FlowArgument/FlowArgument'),
    FlowCard: require('./includes/FlowCard/FlowCard'),
    FlowCardAction: require('./includes/FlowCard/FlowCardAction'),
    FlowCardCondition: require('./includes/FlowCard/FlowCardCondition'),
    FlowCardTrigger: require('./includes/FlowCard/FlowCardTrigger'),
    FlowCardTriggerDevice: require('./includes/FlowCard/FlowCardTriggerDevice'),
    FlowToken: require('./includes/FlowToken/FlowToken'),
    Image: require('./includes/Image/Image'),
    InsightsLog: require('./includes/Insights/InsightsLog'),
    LedringAnimation: require('./includes/Ledring/LedringAnimation'),
    LedringAnimationSystem: require('./includes/Ledring/LedringAnimationSystem'),
    LedringAnimationSystemProgress: require('./includes/Ledring/LedringAnimationSystemProgress'),
    ManagerApi: require('./includes/Managers/ManagerApi'),
    ManagerApps: require('./includes/Managers/ManagerApps'),
    ManagerArp: require('./includes/Managers/ManagerArp'),
    ManagerAudio: require('./includes/Managers/ManagerAudio'),
    ManagerBLE: require('./includes/Managers/ManagerBLE'),
    ManagerClock: require('./includes/Managers/ManagerClock'),
    ManagerCloud: require('./includes/Managers/ManagerCloud'),
    ManagerCron: require('./includes/Managers/ManagerCron'),
    ManagerDrivers: require('./includes/Managers/ManagerDrivers'),
    ManagerFlow: require('./includes/Managers/ManagerFlow'),
    ManagerGeolocation: require('./includes/Managers/ManagerGeolocation'),
    ManagerI18n: require('./includes/Managers/ManagerI18n'),
    ManagerImages: require('./includes/Managers/ManagerImages'),
    ManagerInsights: require('./includes/Managers/ManagerInsights'),
    ManagerLedring: require('./includes/Managers/ManagerLedring'),
    ManagerNFC: require('./includes/Managers/ManagerNFC'),
    ManagerNotifications: require('./includes/Managers/ManagerNotifications'),
    ManagerRF: require('./includes/Managers/ManagerRF'),
    ManagerSettings: require('./includes/Managers/ManagerSettings'),
    ManagerSpeechInput: require('./includes/Managers/ManagerSpeechInput'),
    ManagerSpeechOutput: require('./includes/Managers/ManagerSpeechOutput'),
    ManagerZigBee: require('./includes/Managers/ManagerZigBee'),
    ManagerZwave: require('./includes/Managers/ManagerZwave'),
    Notification: require('./includes/Notification/Notification'),
    Signal: require('./includes/Signal/Signal'),
    Signal433: require('./includes/Signal/Signal433'),
    Signal868: require('./includes/Signal/Signal868'),
    SignalInfrared: require('./includes/Signal/SignalInfrared'),
    SimpleClass: require('./includes/SimpleClass'),
    Speaker: require('./includes/Speaker/Speaker'),
    ZigBeeCluster: require('./includes/ZigBee/ZigBeeCluster'),
    ZigBeeEndpoint: require('./includes/ZigBee/ZigBeeEndpoint'),
    ZigBeeNode: require('./includes/ZigBee/ZigBeeNode'),
    ZwaveCommandClass: require('./includes/Zwave/ZwaveCommandClass'),
    ZwaveNode: require('./includes/Zwave/ZwaveNode')
};
