const loginPage = require('../pageObjects/login.page')


describe('Trello Sing-in page', () => {

    beforeEach(async () => {
        await loginPage.openTrello()
    })
    it('Sign in as a registered user', async () => {
        await loginPage.setCredentials('testmelisadominguez@gmail.com', 'TestMelisa-02142024.')
        const titleWelcome = await loginPage.titleWelcomePage.getAttribute('title')
        titleWelcome.should.equal('Test MelisaDG (testmelisadg)')
    })

    it('Sign in as non-registered user', async () => {
        await loginPage.setCredentials('mymail@gmail.com', '9876543***$%')
        const errorMessage = await loginPage.errorBox.getText()
        assert.equal(errorMessage,'Incorrect email address and / or password. If you recently migrated your Trello account to an Atlassian account, you will need to use your Atlassian account password. Alternatively, you can get help logging in.')
    })
})

describe('Trello Sing-in page with Slack account', () => {
    beforeEach(async () => {
        await loginPage.openTrello()
        await loginPage.loginWithSlack('testing-training-talk')
    })
    it('Enable the Sign in registered user with Slack account page', async () => {
        const gmailButton = await loginPage.signInGmailButton.getText()
        expect(gmailButton).to.equal('Sign In With Google')
    })

    it('Sign in with Slack account and gmail account registered user', async () => {
        await loginPage.loginSlackFromGmail('testmelisadominguez@gmail.com', 'TestMelisa-02142024.')
        const titleWelcome = await loginPage.titleWelcomePage.getAttribute('title')
        expect(titleWelcome).to.equal('Test MelisaDG (testmelisadg)')
    })

})