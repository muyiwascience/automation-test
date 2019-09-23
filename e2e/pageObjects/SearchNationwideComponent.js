class SearchNationwideComponent {
    noNationwideMortage() {
        return browser
            .element('#selectorItemHaveNationwideMortgage1 > span');
    }

    switchingMyMortage() {
        return browser
            .element('#selectorItemNationwideMortgageTypeNo2 > span');
    }

    propertyvalue() {
        return browser
            .element('#SearchPropertyValue');
    }

    mortgageAmount() {
        return browser
            .element('#SearchMortgageAmount');
    }

    mortgageTerm() {
        return browser
            .element('#SearchMortgageTerm');
    }

    findMortgageRateButton() {
        return browser
            .element('#myButton');
    }
}
module.exports = new SearchNationwideComponent();
