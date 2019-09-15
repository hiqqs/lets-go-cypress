const tests = require('../support/lets-go')

describe('Lets Begin', function() {

    // it('Open browser to speedtest.net', function() {
    //   tests.beginTests()
    // })

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