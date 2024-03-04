const loginPage = require('../pageObjects/pages/login.page')


describe('Trello Sing-in page', () => {

    beforeEach(async () => {
        await loginPage.openTrello()
    })
    it('Sign in as a registered user', async () => {
        const titleWelcome = await loginPage.loginToTrello(loginPage.credentials().username,loginPage.credentials().password)
        expect(titleWelcome).to.equal((await loginPage.titleMessages()).successLogin)
    })

    it('Sign in as non-registered user', async () => {
        const errorMessage =await loginPage.loginToTrello(loginPage.randomCredentials().username,loginPage.randomCredentials().password)
        expect(errorMessage).to.equal((await loginPage.titleMessages()).failedLogin)
    })
})

describe('Trello Sing-in page with Slack account', () => {
    beforeEach(async () => {
        await loginPage.openTrello()
        await loginPage.loginWithSlack('testing-training-talk')
    })
    it('Enable the Sign in registered user with Slack account page', async () => {
        const gmailButton = await loginPage.signInGmailButton()
        expect(gmailButton).to.equal('Sign In With Google')
    })

    it('Sign in with Slack account and gmail account registered user', async function () {
       this.retries(1)
       const titleWelcome= await loginPage.loginSlackFromGmail(loginPage.credentials().username,loginPage.credentials().password)
        expect(titleWelcome).to.equal((await loginPage.titleMessages()).successLogin)
    })

})