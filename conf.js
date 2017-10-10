exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    defaultTimeoutInterval: 250000,
    getPageTimeout: 600000,
    allScriptsTimeout: 5000000,
    framework: 'custom',
    ignoreUncaughtExceptions: true,
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome',
    },

    onPrepare: function () {
        console.log('onPrepare');
        sampleSteps = require('./features/testApp/step_definations/sampleSteps.js');
        homePage = require('./features/testApp/pages/home_page');
        //browser.driver.manage().window().maximize();
    },

    baseURL: "https://www.room77.com",

    onCleanUp: function () {
        // const report = require('cucumber-html-report');
        // report.create({
        //     source: './features/testApp/reports/results.json',      // source json 
        //     dest: './features/testApp/reports',                   // target directory (will create if not exists) 
        //     name: 'CucumberReport.html',                 // report file name (will be index.html if not exists) 
        //     // template: 'mytemplate.html',             // your custom mustache template (uses default if not specified) 
        //     title: 'Cucumber Report',             // Title for default template. (default is Cucumber Report) 
        //     component: 'My Component'                // Subtitle for default template. (default is empty) 
        //     // logo: './logos/cucumber-logo.svg',   // Path to the displayed logo. 
        //     // screenshots: './screenshots',               // Path to the directory of screenshots. Optional. 
        //     //  maxScreenshots: 10                           // Max number of screenshots to save (default is 1000) 
        // })
        //     .then(console.log)
        //     .catch(console.error);


        var reporter = require('cucumber-html-reporter');
        var options = {
            theme: 'bootstrap',
            jsonFile: './reports/results.json',
            output: './reports/cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "0.0.0",
                "Test Environment": "STAGING",
                "Browser": "Chrome",
                "Platform": "Windows 7",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);


    },

    specs: [
        'features/*/*/*.feature'
    ],

    cucumberOpts: {
        format: ['json:reports/results.json', 'pretty'],
        require: ['./features/testApp/step_definations/sampleSteps.js', 'support/env.js', './features/testApp/pages/home_page'],
        profile: false,
        'no-source': true
    }
};