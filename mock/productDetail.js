import AxiosMock from './axiosMock'
//详情模拟数据
let productDetail = function () {
    //获取详情
    AxiosMock.Mock.mock(AxiosMock.api.productDetail.detail, 'get', function () {
        return {
            "bCode": "success",
            "code": "0X204",
            "data": "",
            "message": "详情信息",
            "success": false
        }
    }
    );
    //加入收藏
    AxiosMock.Mock.mock(AxiosMock.api.productDetail.collection, 'get', function (options) {
        //console.log(options);
        return {
            "bCode": "success",
            "code": "0X204",
            "data": "",
            "message": "收藏成功",
            "success": false
        }
    }
    );
}

export default productDetail();



