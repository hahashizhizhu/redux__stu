import {combineReducers} from 'redux'
import LoginReducer from './login_reducer'
import MenuReducer from './menu_reducer'
import CategoryReducer from './category_reducer' 



export default combineReducers({
    userInfo:LoginReducer,
    title:MenuReducer,
    categoryList:CategoryReducer
})