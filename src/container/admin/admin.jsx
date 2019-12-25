import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route,Switch,Redirect} from 'react-router-dom'
import {Layout} from 'antd';
import {deleteUserInfo} from '../../redux/actions/login_action'
import Header from './header/header'
import LeftNav from './left_nav/left_nav'
import './css/admin.less'
import Home from '../../components/home/home';
import Category from '../category/category'
import Product from '../product/product'
import User  from '../user/user'
import Role from '../role/role'
import Bar from '../bar/bar'
import Line from '../line/line'
import Pie from '../pie/pie'


const {Footer, Sider, Content } = Layout;

 class Admin extends Component {

	//退出登录的函数
	logout = ()=>{
	  //删除 localStorage中的数据
	  //跳转页面到login
	  this.props.deleteUserInfo()
	}
	render() {
		//判断如果没有登录 不能跳转admin
		if (!this.props.userInfo.isLogin) {
			// 	//强制跳转login
				return <Redirect to = '/login'/>
			}
		return (
			    <Layout className = 'admin'>
				  {/* <h2>hello,  {this.props.userInfo.user.username}</h2> */}
				  {/* <button onClick = {this.logout}>退出登录</button> */}
				
					<Sider>
						<LeftNav/>
					</Sider>
					<Layout>
						<Header/>
						<Content className = 'content'>
                            <Switch>
								<Route path = '/admin/home' component = {Home}/>
								<Route path = '/admin/prod_about/category' component = {Category}/>
								<Route path = '/admin/prod_about/product' component = {Product}/>
								<Route path = '/admin/user' component = {User}/>
								<Route path = '/admin/role' component = {Role}/>
								<Route path = '/admin/charts/bar' component = {Bar}/>
								<Route path = '/admin/charts/line' component = {Line}/>
								<Route path = '/admin/charts/pie' component = {Pie}/>
								<Redirect to = '/admin/home'/>
							</Switch>
						</Content>
						<Footer className = 'footer'>推荐使用谷歌浏览器，获取最佳用户体验</Footer>
					</Layout>
				</Layout>
			
		)
	}
}

export default connect(
	state => ({userInfo:state.userInfo}),
	{deleteUserInfo}
)(Admin)
