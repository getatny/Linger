import Taro, { Component } from '@tarojs/taro'
import { ScrollView, View } from "@tarojs/components"
import { useSelector } from "@tarojs/redux"
import TitleBar from "../../components/titleBar/titleBar"
import MusicBlock from "../../components/musicBlock/musicBlock"

export default class About extends Component {

    state = {
        musicList: [
            { id: 1, cover: 'http://p3.music.126.net/6CB6Jsmb7k7qiJqfMY5Row==/109951164260234943.jpg?param=100y100', title: 'Counting Sheep', author: 'SAFIA', favorite: '20' },
            { id: 2, cover: 'http://p2.music.126.net/MXzI7ExXb6ru3CeW_P1HSw==/7906588115831440.jpg?param=130y130', title: 'Counting Sheep', author: 'SAFIA', favorite: '20' }
        ]
    }

    render() {
        const customBar = useSelector(state => state.system.customBar)

        return <View className='main-page'>
            <ScrollView scrollY className='main-content'>
                <TitleBar isBack title='喜欢的音乐' black />
                <View style={{ paddingTop: (customBar + 20) + 'px' }} />
                <MusicBlock data={this.state.musicList} />
            </ScrollView>
        </View>
    }

}
