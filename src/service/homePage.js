import service from './service'

class Home {
    getIndex() {
        return service.axios.post(service.api.home.list)
    }
    delProduct(id) {
        return service.axios.get(service.api.home.delete, {
            params: {
                productId: id
            }
        })
    }
}

export default new Home();