import { View } from "@tarojs/components"
import Taro, { Component } from "@tarojs/taro"
import CIcon from "../cIcon/cIcon"
import './musicBlock.less'

export default class MusicBlock extends Component {

    render() {
        const musicList = this.props.data !== undefined ? this.props.data : []

        return musicList.map(item => (
            <View className='music-block-component' key={item.id}>
                <View className='block-cover' style={{ backgroundImage: 'url("' + item.cover + '")' }} />
                <View className='block-info'>
                    <View className='info-title'>{item.title}</View>
                    <View className='info-author'>{item.author}</View>
                </View>
                <View className='block-favorite'>
                    <View className='favorite-icon'>
                        <CIcon icon='favorites' />
                    </View>
                    <View className='favorite-number'>{item.favorite}</View>
                </View>
            </View>
        ))
    }

}
