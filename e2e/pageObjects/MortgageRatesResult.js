class MortgageRatesResult {
    mortgageTypeFixRate() {
        return browser
            .element('#fixed');
    }

    productFeeWithFee() {
        return browser
            .element('#product-fee-fee');
    }

    fiveyearFixedmoreInfoAndApply() {
        return browser
            .element('tr:nth-child(1) > th.showHideCell.doNotPrint > a');
    }

    fiverYearFixedApplyButton() {
        return browser
            .element('div > div.applyButton.doNotPrint > a');
    }
}
module.exports = new MortgageRatesResult();
