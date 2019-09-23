class Page {
    constructor() {
    }

    open(path) {
        browser.url(`/${path}`);
    }

    getTitle() {
        browser.getTitle();
    }

    waitForLoading() {
        browser.pause(10000);
    }

    setAndDeleteCookies() {
        browser.setCookie({ name: 'author', value: 'olly' });
        browser.deleteCookie('olly');
    }

    waitLong() {
        browser.pause(10000);
    }

    waitSmall() {
        browser.pause(3000);
    }
}
module.exports = new Page();
