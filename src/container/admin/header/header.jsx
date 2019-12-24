import React, { Component } from 'react'
import { Button, Icon, Modal } from 'antd';
import { connect } from 'react-redux'
import screenfull from 'screenfull'
import dayjs from 'dayjs'
import { reqWeatherData } from '../../../api/index'
import { deleteUserInfo } from '../../../redux/actions/login_action';

import './header.less'

const { confirm } = Modal;

class Header extends Component {

    //状态判断
    state = {
        //是否全屏
        isFull: false,
        //时间
        date: dayjs().format('YYYY年 MM月DD日 HH:mm:ss'),
        weatherData:{}
    }

    //全屏切换
    switchScreenFull = () => {
        screenfull.toggle()
    }
    //退出登录
    logout = () => {
        //直接退出
        // this.props.deleteUserInfo()
        confirm({
            title: '真的要退出吗？',
            content: '若退出就需要重新登录哦!!',
            cancelText: '取消',
            okText: '确定',
            onOk: () => {
                this.props.deleteUserInfo()
            },
        });
    }


    //设置天气信息
    getWeatherData = async () => {
        let result = await reqWeatherData()
        console.log(result);
        //更新状态
        this.setState({
            weatherData: {
                img: result.dayPictureUrl,
                temperature: result.temperature,
                weather: result.weather
            }
        })
        console.log(this.state.weatherData.weather);
        console.log(this.state.weatherData.temperature);
    }
    //挂载之后的判断
    componentDidMount() {
        //检测全屏状态的变化
        screenfull.on('change', () => {
            let { isFull } = this.state
            //状态的变化
            this.setState({ isFull: !isFull })
        })

        //每秒更新一下时间
        this.timer = setInterval(() => {
            //更新时间状态
            this.setState({ date: dayjs().format('YYYY年 MM月DD日 HH:mm:ss') })
        }, 1000)

        //请求天气信息
        this.getWeatherData()
    }


    //当退出时 停掉定时器 也就是生命周期要结束  挂载结束
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        let { username } = this.props.userInfo.user
        //获取天气信息
        let {img,weather,temperature} = this.state.weatherData

        return (
            <div className='header'>
                <div className='header-top'>
                    <Button size='small' onClick={this.switchScreenFull}>
                        <Icon type={this.state.isFull ? 'fullscreen-exit' : 'fullscreen'} />
                    </Button>
                    <span>欢迎, {username} </span>
                    <Button size='small' type='link' onClick={this.logout}>退出登录</Button>
                </div>
                <div className='header-bottom'>
                    <div className='header-bottom-left'>
                        <span>首页</span>
                    </div>
                    <div className='header-bottom-right'>
                        <span>{this.state.date}</span>
                        <img src={img} alt="天气吖"/>
                        <span>{weather}   温度：{temperature}</span>
                    </div>
                </div>

            </div>
        )
    }
}


export default connect(
    state => ({ userInfo: state.userInfo }),
    { deleteUserInfo }
)(Header)