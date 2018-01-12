import AxiosMock from './axiosMock'
//登录模拟数据
let login = function () {
    AxiosMock.Mock.mock(AxiosMock.api.login.loginIn, 'post',
        { "success": true, "message": "登录成功", "code": "0X000", "bCode": "success", "data":{
            ssoSign:'sdfdsdfdsf'
        } }
    );
}

export default login();



