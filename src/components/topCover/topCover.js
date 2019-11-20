import { View, Image } from "@tarojs/components"
import Taro, { Component } from '@tarojs/taro'
import './topCover.less'
import Logo from '../../static/img/logo.png'

export default class TopCover extends Component {

    render() {
        const { info, logo, children, cover } = this.props

        return (
            <View className='top-cover-component' style={{ backgroundImage: 'url("' + cover + '")' }}>
                {info ? (
                    <View className='info'>
                        {logo ? <Image mode='aspectFit' src={Logo} /> : null}
                        {children}
                    </View>
                ) : null}
            </View>
        )
    }

}
