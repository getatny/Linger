import { View, Image } from "@tarojs/components"
import Taro, { Component } from '@tarojs/taro'
import './topCover.less'
import Logo from '../../static/img/logo.png'

export default class TopCover extends Component {

    render() {
        const { info, logo, children, cover, shadow, noMask, click } = this.props

        return (
            <View className={`top-cover-component ${shadow ? 'shadow' : null} ${noMask ? null : 'mask'}`} style={{ backgroundImage: 'url("' + cover + '")' }} onClick={() => click ? click() : null}>
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
