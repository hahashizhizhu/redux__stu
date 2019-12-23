import {SAVE_USERINFO,DELETE_USERINFO} from '../action_types'

//从localStorage中读取登录时保存的信息
let _user = JSON.parse(localStorage.getItem('user'))
let _token = localStorage.getItem('token')

let initState ={
    user:_user || {},
    token:_token || '',
    isLogin:_user && _token ? true : false
}
export default function (preState = initState,action) {
    let {type,data} = action;
    let newState
    switch (type) {
        case SAVE_USERINFO:
            newState = {user:data.user,token:data.token,isLogin:true}
            return newState;
            case DELETE_USERINFO:
                newState = {user:{},token:'',isLogin:false}
                return newState;
      default:
            return preState;
    }
}