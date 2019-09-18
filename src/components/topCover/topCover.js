import { View, Image } from "@tarojs/components"
import Taro, { Component } from '@tarojs/taro'
import './topCover.less'
import Logo from '../../static/img/logo.png'

export default class TopCover extends Component {

    render() {
        return (
            <View className='top-cover-component' style={{ backgroundImage: 'url("' + this.props.cover + '")' }}>
                <View className='info'>
                    <Image mode='aspectFit' src={Logo} />
                </View>
            </View>
        )
    }

}
