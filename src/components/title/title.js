import { View } from "@tarojs/components"
import Taro, { Component } from '@tarojs/taro'
import './title.less'

export default class Title extends Component {

    render() {
        return <View className='title-component' style={this.props.spec ? { marginBottom: '50rpx' } : null}>{this.props.children}</View>
    }
}
