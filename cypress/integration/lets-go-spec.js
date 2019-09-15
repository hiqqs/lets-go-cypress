const tests = require('../support/lets-go')

describe('Lets Begin', function() {

    beforeEach(function(){
      tests.beginTests();
    });
    
    it('Open browser to speedtest.net and view ISP and Host info', function() {
      tests.shouldHaveISP();
      tests.shouldHaveHost();
    });

    // Performs a speed test
    it('Performs a speed test and then rate ISP', function() {
      tests.clickGoButton();
      tests.shouldHavePing();
      tests.shouldHaveDownloadSpeed();
      tests.shouldHaveUploadSpeed();
      tests.rateISP(4);
    });

    // Verifies navigation etc...
    it ('navbar menu has expected content', function() {
      tests.checkNavMenuContent();
    });


})