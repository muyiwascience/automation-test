class MortgageRateComponent {
    getCookiePolicy() {
        return browser
            .element('#pageWrapper > div.cookiePolicy > a');
    }

    mortgageRate() {
        return browser
            .element('#MortgagesNavItem > a');
    }

    mortgageRateLink() {
        return browser
            .element('a=Mortgage rates');
    }
    //
    // mortgageRateLinkIsVisible() {
    //     return browser.isVisible('#MortgagesNavItem > a');
    // }
}
module.exports = new MortgageRateComponent();
