import service from './service'

class Detail {
    /**
     **获取详情
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

export default new Detail();