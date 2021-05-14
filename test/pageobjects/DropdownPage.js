const Page = require('./page');


class DropdownPage extends Page {
    get open() {
        return browser.url('/dropdown');
    }

    get dropdownElement() {
        return $('#dropdown');
    }
}

module.exports = new DropdownPage();