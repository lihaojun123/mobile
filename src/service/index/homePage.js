import service from '../service'

class Home {
    /**
     **获取首页列表
     **/
    getIndex() {
        return service.axios.post(service.api.home.list)
    }
    /**
     **删除产品
     **@param 产品id
     **/
    delProduct(productId) {
        return service.axios.get(service.api.home.delete, {
            params: {
                productId: productId
            }
        })
    }
    /**
     **获取产品详情
     **@param 产品id
     **/
    getDetail(productId) {
        return service.axios.get(service.api.productDetail.detail, {
            params: {
                productId: productId
            }
        })
    }
    /**
     **收藏
     **@param 产品id
     **/
    collection(productId){
        return service.axios.get(service.api.productDetail.collection, {
            params: {
                productId: productId
            }
        })
    }
}

export default new Home();