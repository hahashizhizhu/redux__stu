import axios from 'axios'
import {message} from 'antd'
import {BASE_URL} from "../config/index"
//引入 进度条
import NProgress from 'nprogress'
//引入 进度条样式
import 'nprogress/nprogress.css'
import qs from 'querystring'

axios.defaults.base_URL = BASE_URL;


//qiangqiulanjie
axios.interceptors.request.use((config)=>{
    
    NProgress.start();
    let {method,data} =config

    if (method.toUpperCase() ==='POST' && data instanceof Object ) {
        config.data = qs.stringify(data)
    } 

    return config

})

//xiangyinglanjie
axios.interceptors.response.use(
    (response)=>{
      NProgress.done()
      return response.data;
    },
    (error)=>{
      NProgress.done()
      message.error('请求出错')
      return new Promise(()=>{})
    }
) 

export default axios;