class Page {
    async openLogin() {
        await browser.url('https://trello.com/login');
    }
}
module.exports = new Page;