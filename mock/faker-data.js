module.exports = function () {
    let homePage = require('./index/homePage.js');
    let login = require('./login/login.js');

    let mock = [
        homePage(),
        login()
    ]
    return Object.assign({}, ...mock);
}
