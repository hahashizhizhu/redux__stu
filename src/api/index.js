import myAxios from "./myAxios"
import jsonp from 'jsonp'
import {message} from 'antd' 

import {WEATHER_AK,WEATHER_BASE_URL,WEATHER_CITY} from '../config/index'

export const reqLogin = (loginObj) => myAxios.post('/login',loginObj)

//天气数据信息
export const reqWeatherData = ()=>{
  
    // 使用promise
    return new Promise((resolve,reject)=>{
        //使用jsonp
        jsonp(`${WEATHER_BASE_URL}?location=${WEATHER_CITY}&output=json&ak=${WEATHER_AK}`,(err,data)=>{
			if(!err){
				resolve(data.results[0].weather_data[0]);
			}else{
				message.error('请求天气数据失败，自己想办法')
			}
		})
    })
     
} 