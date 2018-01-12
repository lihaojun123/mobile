let profix='';
if(process.env.NODE_ENV=='production'){
    profix='/' 
}
 const api={
    //首页接口
    home:{
        list:profix + 'home/list.json',
        delete:profix + 'home/delete.json'
    },
    //资讯页接口
    info:{
        list:profix + 'info/list.json'
    },
    //登录
    login:{
        loginIn:profix + 'login/doList.json'
    },
    productDetail:{
        detail:profix + 'productDetail/detail.json',
        collection:profix + 'productDetail/collection.json'
    }
};

export default api;
