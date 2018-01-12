
module.exports = function () {
    let profix = '', suffix = '';
    if (process.env.NODE_ENV == 'production') {
        profix = '/';
        suffix = ".json";
    }
    const api = {
        //首页接口
        home: {
            list: profix + 'api/home/list' + suffix,
            delete: profix + 'api/home/delete' + suffix,
        },
        //资讯页接口
        info: {
            list: profix + 'api/info/list' + suffix
        },
        //登录
        login: {
            loginIn: profix + 'api/login/loginIn' + suffix
        },
        productDetail: {
            detail: profix + 'api/productDetail/detail' + suffix,
            collection: profix + 'api/productDetail/collection' + suffix
        }
    };
    return api
}();




