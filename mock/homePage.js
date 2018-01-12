import AxiosMock from './axiosMock'
//首页模拟数据
let home = function () {
    //首页列表
    AxiosMock.Mock.mock(AxiosMock.api.home.list, 'post', 
    {
        "bCode": "success",
        "code": "0X000",
        "data|1-10": [
          {
            "cartId": "",
            "checked": false,
            "image": '@IMG(200x200)',
            "productCode": "LOL",
            "productId|+1": 844,
            "productName|1-2": "xxxxxxxx",
            "supId": "C285E4CF25D2ED21F782210D0C6A6AAA",
            "supProId": ""
          }
        ],
        "message": "执行成功",
        "success": true
      }
    );
    //删除样品
    AxiosMock.Mock.mock(AxiosMock.api.home.deletes, 'get', function(options){
        //console.log(options);
        return{
                "bCode": "success",
                "code": "0X204",
                "data": "",
                "message": "删除失败, 该样品已被采购商加入订单",
                "success": false
              }     
     } 
    );
}

export default home();



