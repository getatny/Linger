import { ScrollView, View } from "@tarojs/components"
import Taro, { Component } from '@tarojs/taro'
import './playList.less'

export default class PlayList extends Component {

    onListItemClick = (id) => {
        const data = this.props.data.find(item => item.id === id)
        this.props.onListItemClick(data)
    }

    render() {
        const list = this.props.data !== undefined ? this.props.data : []

        return (
            <ScrollView scrollX className='play-list'>
                {list.map(item => {
                    return (
                        <View className='play-list-item' key={item.id} onClick={() => this.onListItemClick(item.id)}>
                            <View className='item-cover'>
                                <View className='cover' style={{ backgroundImage: 'url("' + item.cover + '")' }} />
                                <View className='mask' style={{ backgroundImage: 'url("' + item.cover + '")' }} />
                            </View>
                            <View className='title'>{item.title}</View>
                        </View>
                    )
                })}
            </ScrollView>
        )
    }

}
