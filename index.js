/**
 *
 * @type {{App: App, FlowCardAction: ((function(): *)|*), FlowCardTrigger: ((function(): *)|*), FlowCardCondition: ((function(): *)|*), LedringAnimation: ((function(): *)|*)}}
 */
module.exports = {
    App: require('./includes/App'),
    LedringAnimation: require('./includes/Ledring/LedringAnimation'),
    FlowCardTrigger: require('./includes/FlowCard/FlowCardTrigger'),
    FlowCardAction: require('./includes/FlowCard/FlowCardAction'),
    FlowCardCondition: require('./includes/FlowCard/FlowCardCondition'),
};
