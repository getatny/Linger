import { View, Text } from "@tarojs/components";
import Taro, { Component } from '@tarojs/taro'
import { useSelector } from '@tarojs/redux'
import CIcon from "../cIcon/cIcon"
import './titleBar.less'

export default class TitleBar extends Component {

    onBackButtonClick = () => {
        const backType = this.props.backType

        if (backType === 'custom') {
            this.props.onBackButtonClick()
        } else {
            Taro.navigateBack()
        }
    }

    render() {
        const customBar = useSelector(state => state.system.customBar)
        const statusBar = useSelector(state => state.system.statusBar)

        return (
            <View className={`title-bar-component ${this.props.black || null}`} style={{ height: customBar + 'px' }}>
                <View className='title' style={{ height: (customBar - statusBar) + 'px', paddingTop: statusBar + 'px', lineHeight: (customBar - statusBar) + 'px' }}>
                    {this.props.isBack ? (
                        <View className='back-button' onClick={this.onBackButtonClick}>
                            <CIcon icon={this.props.icon ? this.props.icon : 'back'} />
                            <Text className='title-text'>{this.props.title ? this.props.title : '返回'}</Text>
                        </View>
                    ) : null}
                </View>
            </View>
        )
    }

}
