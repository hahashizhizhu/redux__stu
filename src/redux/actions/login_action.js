import {SAVE_USERINFO,DELETE_USERINFO} from '../action_types'


//保存数据
export const saveUserInfo = (value)=>{
     //保存登录记录
     localStorage.setItem('user',JSON.stringify(value.user))
     localStorage.setItem('token',value.token)    
    
    return {type:SAVE_USERINFO,data:value}
}

//退出登录时  删除数据
export const deleteUserInfo = (value)=>{
    //保存登录记录
    localStorage.removeItem('user')
    localStorage.removeItem('token')    
   
   return {type:DELETE_USERINFO,data:''}
}