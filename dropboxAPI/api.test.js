// This corrected code snippet is in JavaScript.
const axios = require('axios');
const chai = import('chai');
const token ='sl.BxdtRBj7IIowZYdkfsKwIeWPBMZqsYLCPhjSZ7fW7-gUiu9Wlvesq7hY_e56PPNT-SpPj71rwqAEq5grfFTMaUXr2JB-1hWR88WVcb1zkjPJILVQqLCPGic-rqPaOJUtytgq6PS0ZPEof9MLsve8vJk'
describe('DropboxAPI', async () => {
	it('Upload a file to the API dropbox account', async () => {
		const fileContent =
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
		const response = await axios.post(
			'https://content.dropboxapi.com/2/files/upload',
			fileContent,
			{
				headers: {
					Authorization: 'Bearer ' + token,
					'Dropbox-API-Arg': JSON.stringify({
						autorename: false,
						mode: 'add',
						mute: false,
						path: '/test10.txt',
						strict_conflict: false
					}),
					'Content-Type': 'application/octet-stream'
				}
			}
		);
		(await chai).expect(response.data.name).to.equal('test10.txt');
	});
	it('Obtain metadata file', async () => {
		const data = {
			include_deleted: false,
			include_has_explicit_shared_members: false,
			include_media_info: false,
			path: '/test10.txt'
		};

		const response = await axios.post('https://api.dropboxapi.com/2/files/get_metadata', data, {
			headers: {
				Authorization: 'Bearer ' + token,
				'Content-Type': 'application/json'
			}
		});
		(await chai).expect(response.headers).to.have.property('content-type');
	});
	it('Erase file', async () => {
		const data = {
			path: '/test10.txt'
		};

		const response = await axios.post('https://api.dropboxapi.com/2/files/delete_v2', data, {
			headers: {
				Authorization: 'Bearer ' + token,
				'Content-Type': 'application/json'
			}
		});
		(await chai).expect(response.status).to.equal(200);
	});
});
