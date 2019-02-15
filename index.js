var request = require('request');
var randomstring = require('randomstring');

class CoSign {
    constructor(config) {
        this.config = config;
        this.complete = false;
    }

}

function getCosignCookie() {
    return new Promise((resolve, reject) => {
        var url = "https://weblogin.lancs.ac.uk/login/?cosign-https-lancaster.ombiel.co.uk&https://lancaster.ombiel.co.uk/campusm/sso/required/login/411";
        request(url, { followRedirect: false }, (err, resp, body) => {
            if (err) reject(err);
            else if (resp.statusCode == 200) resolve(resp.headers['set-cookie']);
            else reject();
        })
    })
}
function doLogin(username, password) {
    getCosignCookie().then(header=>{
        var url = "https://weblogin.lancs.ac.uk/login/";
        
    })
}