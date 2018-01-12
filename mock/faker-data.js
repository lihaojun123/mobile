module.exports = function () {
    let homePage = require('./index/homePage.js');
    let mock = [
        homePage()
    ]
    return Object.assign({}, ...mock);
}
