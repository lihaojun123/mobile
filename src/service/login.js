import service from './service'

class Login{
    login(){
        return service.axios.post(service.api.login.loginIn)
    }
}

export default new Login();