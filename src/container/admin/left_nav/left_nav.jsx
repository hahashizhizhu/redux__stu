import React, { Component } from 'react'
import { Menu, Icon} from 'antd';
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
import {saveMenuTitle} from '../../../redux/actions/menu_action'
import menuList from '../../../config/menu-config'
import Logo from '../../../static/images/logo.png'
import './left_nav.less'
const { SubMenu,Item } = Menu;


@connect(
    state => ({}),
    {saveMenuTitle}
)
@withRouter
class LeftNav extends Component {
  
    createMenu = (list)=>{
       return list.map((menuObj)=>{
        if (!menuObj.children) {
            return (
                <Item key={menuObj.key} onClick={()=>{this.props.saveMenuTitle(menuObj.title)}}>
                    <Link to={menuObj.path}>
                        <Icon type={menuObj.icon} />
                          <span>{menuObj.title}</span>
                    </Link>
                </Item>
          ) 
        }else{
           return(
            <SubMenu
            key={menuObj.key}
            title={
            <span>
                <Icon type={menuObj.icon}/>
                <span>{menuObj.title}</span>
            </span>
            }
            >
            {this.createMenu(menuObj.children)}
            </SubMenu>
           )
        }
      })
    }
  
    toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render() {
        // const {Item} = Menu
        const {pathname} = this.props.history.location
        console.log(pathname);
        return (
            <div >
                <div className = 'nav-top'>
                   <img src={Logo} alt="LOGO"/>
                   <h1>商品管理系统</h1>
                </div>
                <Menu
                selectedKeys={[pathname.split('/').reverse()[0]]}
                defaultOpenKeys={pathname.split('/').splice(2)}
                mode="inline"
                theme="dark"
               >
               {
                   this.createMenu(menuList)
               }
             
                </Menu>
            </div>
        )
    }
}

export default  LeftNav
