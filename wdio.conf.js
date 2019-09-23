const baseUrl = 'https://nationwide.co.uk';


exports.config = {


    specs: [
        './e2e/tests/**/*.js',
    ],

    exclude: [

    ],

    maxInstances: 10,


    capabilities: [{

        maxInstances: 5,

        browserName: 'chrome',
    }],


    sync: true,

    logLevel: 'verbose',

    coloredLogs: true,

    deprecationWarnings: false,

    bail: 0,

    screenshotPath: './errorShots/',

    baseUrl,

    waitforTimeout: 30000,

    connectionRetryTimeout: 912000,

    connectionRetryCount: 3,

    services: ['selenium-standalone'],

    framework: 'jasmine',

    before() {
        require('@babel/register');
    },

    jasmineNodeOpts: {

        defaultTimeoutInterval: 30000,

        expectationResultHandler(passed, assertion) {

        },
    },

};
