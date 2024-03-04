// This corrected code snippet is in JavaScript.
const axios = require('axios');
const chai = import ('chai');
describe('DropboxAPI', async () => {
    it('Upload a file to the API dropbox account', async () => {

        const fileContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

        const token = 'sl.BwxWf8QSuDoHv8-jYMSofVty7eTmJTcbpjQgg5NJHI-PDQ1ECKdCTJMR0ZbIXV5KSOb13A_H7leV1lVTyNVooBBIEwahCYkDhBxT6TU28MryhLq1mPwSvBw-Hsil-743Nnt99_YRPDFtDIx0LYfS2ec'

        const response = await axios.post('https://content.dropboxapi.com/2/files/upload', fileContent,
            {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Dropbox-API-Arg': JSON.stringify({
                        autorename: false,
                        mode: 'add',
                        mute: false,
                        path: '/test10.txt',
                        strict_conflict: false
                    }),
                    'Content-Type': 'application/octet-stream'
                }
            });
        //console.log(await response.data);
        (await chai).expect(response.data.name).to.equal('test10.txt')

    })
    it('Obtain metadata file', async () => {

        const token = 'sl.BwxWf8QSuDoHv8-jYMSofVty7eTmJTcbpjQgg5NJHI-PDQ1ECKdCTJMR0ZbIXV5KSOb13A_H7leV1lVTyNVooBBIEwahCYkDhBxT6TU28MryhLq1mPwSvBw-Hsil-743Nnt99_YRPDFtDIx0LYfS2ec'
        const data = {
            "include_deleted": false,
            "include_has_explicit_shared_members": false,
            "include_media_info": false,
            "path": "/test10.txt"
        }

        const response = await axios.post('https://api.dropboxapi.com/2/files/get_metadata', data,
            {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            });
        //console.log(await response.headers);
        (await chai).expect(response.headers).to.have.property('content-type')
    })
    it('Erase file', async () => {

        const token = 'sl.BwxWf8QSuDoHv8-jYMSofVty7eTmJTcbpjQgg5NJHI-PDQ1ECKdCTJMR0ZbIXV5KSOb13A_H7leV1lVTyNVooBBIEwahCYkDhBxT6TU28MryhLq1mPwSvBw-Hsil-743Nnt99_YRPDFtDIx0LYfS2ec'
        const data = {
            "path": "/test10.txt"
        }

        const response = await axios.post('https://api.dropboxapi.com/2/files/delete_v2', data,
            {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            });
        //console.log(await response.status);
        (await chai).expect(response.status).to.equal(200)
    })

});
