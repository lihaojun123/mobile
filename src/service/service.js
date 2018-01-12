import axios from  'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
let api=require("../api/api.js");
export default{
    axios,
    api
}




