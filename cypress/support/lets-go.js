const SPEED_TEST_WAIT_TIME = 60 * 1000; // 60s

const beginTests = () => {
    cy.visit('https://www.speedtest.net')
}

const clickGoButton = () => {
    cy.get('.start-button a.js-start-test').click();
}

const shouldHaveSpeedResult = (speedSelector) => {
    // wait until it finds the speed result element with number in it
    // timeout after 60s
    cy.get(speedSelector).contains(/\d/, {
        timeout: SPEED_TEST_WAIT_TIME
    }).should('be.visible');
}

const shouldHaveDownloadSpeed = () => {
    shouldHaveSpeedResult('.result-item-download span.download-speed');
}

const shouldHavePing = () => {
    shouldHaveSpeedResult('.result-item-ping span.ping-speed');
}

const shouldHaveUploadSpeed = () => {
    shouldHaveSpeedResult('.result-item-upload span.upload-speed');
}

const rateISP = (rating) => {
    // rate ISP stars by rating number (1 - 5)
    // sometimes the stars container may be covered by popup ads
    // use force click to make sure it can be triggered
    cy.get(`.result-item-isp .rating-container span:nth-child(${rating})`).click({ force: true });
    // make sure the star color changed after rating
    cy.get('.result-item-isp .rating-container span[data-default="#1cbfff"]').should('have.length', rating);
}

const shouldHaveISP = () => {
    // ISP info should not be empty
    cy.get('.result-item-isp .result-label').should('not.be.empty');
    cy.get('.result-item-isp .result-data').should('not.be.empty');
}

const shouldHaveHost = () => {
    // host URL and address should not be empty
    cy.get('.result-item-host .hostUrl').should('not.be.empty');
    cy.get('.result-item-host .result-data').should('not.be.empty');
}

const NAV_CONTENT_MAP = {
    Apps: ['iOS', 'Android', 'Mac', 'Windows', 'Chrome', 'Apple TV'],
    Insights: ['Blog', 'Global Index', 'Ookla 5G Map', 'Reports'],
    Network: [],
    Enterprise: ['Speedtest Intelligence', 'Speedtest Custom', 'CellMaps', 'Partners & Programs'],
    About: ['Press', 'Knowledge Base', 'Advertise', 'Careers'],
    'Log In': ['Results History', 'Settings', 'Help', 'Create Account']
}

// check navigation bar menu and sub menu content match with the NAV_CONTENT_MAP
const checkNavMenuContent = () => {
    const menuList = Object.keys(NAV_CONTENT_MAP);
    for (const menuItem of menuList) {
        const subMenuList = NAV_CONTENT_MAP[menuItem];
        console.log(menuItem);

        if (subMenuList.length === 0) continue;
        
        // somehow the trigger mouseover doesn't work here for nav menu item, use invoke show instead
        // cy.get('.menu-main > li a').contains(menuItem).trigger('mouseover');
        cy.get('.menu-main > li a').contains(menuItem).siblings('.sub-menu').invoke('show');
        for (const subMenu of subMenuList) {
            cy.get('.menu-main li a').contains(menuItem).siblings('.sub-menu').find('li a').contains(subMenu).should('be.visible');
        }
    }
}

const clickAndCheckNavbarLink = (linkName, linkUrl, linkTitle) => {
    cy.get('.menu-main > li a').contains(linkName).click();
    checkPageUrlAndTitle(linkUrl, linkTitle);
}

const checkPageUrlAndTitle = (pageUrl, pageTitle) => {
    cy.url().should('eq', `https://www.speedtest.net/${pageUrl}`);
    cy.title().should('eq', pageTitle);
}

const clickSubmenuItem = (menuItem, submenu) => {
    cy.get('.menu-main li a').contains(menuItem).siblings('.sub-menu').find('li a').contains(submenu).click({ force: true });
}

const clickLogo = () => {
    cy.get('.nav .masthead-logo').click()
    cy.url().should('eq', 'https://www.speedtest.net/');
}

module.exports = {
    beginTests,
    clickGoButton,
    shouldHaveDownloadSpeed,
    shouldHavePing,
    shouldHaveUploadSpeed,
    rateISP,
    shouldHaveISP,
    shouldHaveHost,
    checkNavMenuContent,
    clickAndCheckNavbarLink,
    clickLogo,
    checkPageUrlAndTitle,
    clickSubmenuItem
}