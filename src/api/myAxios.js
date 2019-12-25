import axios from 'axios'
import {message} from 'antd'
import {BASE_URL} from "../config/index"
//引入 进度条
import NProgress from 'nprogress'
import store from '../redux/store'
import {deleteUserInfo} from '../redux/actions/login_action'
//引入 进度条样式
import 'nprogress/nprogress.css'
import qs from 'querystring'

axios.defaults.base_URL = BASE_URL;


//qiangqiulanjie
axios.interceptors.request.use((config)=>{
    
  //进度条开始
    NProgress.start();
    //获取token
    let {token} = store.getState().userInfo
    //携带token
    if (token) {
      config.headers.Authorization = 'atguigu_' + token
    }
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
      //登录过期时的判断
      if (error.response.status === 401) {
        //如果过期直接退出登录
        message.error('登录过期,请重新登录!!')
        store.dispatch(deleteUserInfo())
      }else{
        //后台或者网络错误
        message.error('请求出错')
      }
      
      return new Promise(()=>{})
    }
) 

export default axios;