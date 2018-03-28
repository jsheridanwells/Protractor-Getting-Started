'use strict';

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec_*.js'],
    capabilities: { 
        browserName: 'chrome'
    },
    jasmineNodeOpts: {
        showColors: true
    }
};