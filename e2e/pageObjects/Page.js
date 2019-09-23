class Page {
    constructor() {
    }

    open(path) {
        browser.url(`/${path}`);
    }

    waitForLoading() {
        browser.pause(5000);
    }

    setAndDeleteCookies() {
        browser.setCookie({ name: 'author', value: 'olly' });
        browser.deleteCookie('olly');
    }
}
module.exports = new Page();
