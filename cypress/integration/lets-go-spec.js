const tests = require('../support/lets-go')

describe('Lets Begin', function() {

    it('Open browser to speedtest.net and view ISP and Host info', function() {
      tests.beginTests();
      tests.shouldHaveISP();
      tests.shouldHaveHost();
    });

    // Performs a speed test
    it('Performs a speed test and then rate ISP', function() {
      tests.beginTests();
      tests.clickGoButton();
      tests.shouldHavePing();
      tests.shouldHaveDownloadSpeed();
      tests.shouldHaveUploadSpeed();
      tests.rateISP(4);
    });


    // Verifies navigation etc...

})