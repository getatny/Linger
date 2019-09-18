import { Text } from "@tarojs/components"
import Taro, { Component } from '@tarojs/taro'
import './cIcon.less'

export default class CIcon extends Component {

    render() {
        return <Text className={`iconfont echofont echo-${this.props.icon}`} />
    }

}
