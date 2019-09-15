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

    it ('navigates between navbar links and verify URL and title', function() {
      tests.clickAndCheckNavbarLink('Apps', 'apps', 'Speedtest Apps - Test Your Internet Anywhere With Any Device');
      tests.clickLogo();

      tests.clickAndCheckNavbarLink('Insights', 'insights', 'Speedtest Insights - Stories, Analysis, and More from the Speedtest Team');
      tests.clickLogo();

      tests.clickAndCheckNavbarLink('Network', 'speedtest-servers', 'Speedtest Servers | Ookla');
      tests.clickLogo();

      tests.clickAndCheckNavbarLink('Enterprise', 'enterprise', 'Enterprise Network Performance Measurement Tools | Ookla');
      tests.clickLogo();
      
      tests.clickAndCheckNavbarLink('About', 'about', 'About Speedtest');
      tests.clickLogo();

      tests.clickSubmenuItem('Apps', 'Mac');
      tests.checkPageUrlAndTitle('apps/mac', 'Speedtest for Mac - Download Speedtest for macOS on the Mac App Store');
    });

})