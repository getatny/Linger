import { View } from "@tarojs/components"
import Taro, { Component } from '@tarojs/taro'
import CIcon from "../cIcon/cIcon"
import './userMenu.less'

export default class UserMenu extends Component {

    onMenuItemClicked = async link => {
        await Taro.navigateTo({
            url: link,
        })
    }

    render() {
        const userMenus = this.props.menus !== undefined ? this.props.menus : []
        return <View className='user-menus'>
            {userMenus.map(menu => (
                <View className='user-menus-item' onClick={() => this.onMenuItemClicked(menu.link)} key={menu.id}>
                    <View className='menu-icon'><CIcon icon={menu.icon} /></View>
                    <View className='menu-title'>{menu.title}</View>
                    <View className='menu-arrow'><CIcon icon='back' /></View>
                    <View className='clear-both' />
                </View>
            ))}
        </View>
    }

}
