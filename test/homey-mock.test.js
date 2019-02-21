// Fetch assert
const assert = require('assert');

// Fetch homey-mock
const Homey = require('../');

describe('homey-mock', () => {

    it('must be an Object', () => {
        assert.strictEqual(Homey instanceof Object, true);
    });

    it('must mock Homey.App', () => {
        assert.strictEqual(Homey.hasOwnProperty('App'), true);
    });

    it('must mock FlowCardAction', () => {
        assert.strictEqual(Homey.hasOwnProperty('FlowCardAction'), true);
    });

    it('must mock FlowCardTrigger', () => {
        assert.strictEqual(Homey.hasOwnProperty('FlowCardTrigger'), true);
    });

    it('must mock FlowCardCondition', () => {
        assert.strictEqual(Homey.hasOwnProperty('FlowCardCondition'), true);
    });

    it('must mock LedringAnimation', () => {
        assert.strictEqual(Homey.hasOwnProperty('LedringAnimation'), true);
    });

});
