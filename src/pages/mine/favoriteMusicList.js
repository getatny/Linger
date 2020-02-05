import Taro, { Component } from '@tarojs/taro'
import { ScrollView, View } from "@tarojs/components"
import { useSelector } from "@tarojs/redux"
import TitleBar from "../../components/titleBar/titleBar"
import PlayListItemDetail from "../../components/playList/playListItemDetail"
import './favoriteMusicList.less'
import '../../components/playList/playList.less'

export default class About extends Component {

    state = {
        musicList: [],
        showPlayListDetail: false,
        playListItem: {}
    }

    componentDidMount() {
        const localList = Taro.getStorageSync('favoriteMusicList')
        const currentTime = new Date().getTime()

        if (!localList || currentTime - localList.time >= 24 * 60 * 60) {
            this.setState({
                musicList: [
                    { id: 1, cover: 'http://p1.music.126.net/2MsstS-M9w5-li0aRy3sUQ==/1380986606815861.jpg?param=320y320', title: '测试' },
                    { id: 2, cover: 'http://p1.music.126.net/x44v5IkLN30gWgUYWYivbg==/109951164000997664.jpg?param=320y320', title: '测试' },
                    { id: 3, cover: 'http://p2.music.126.net/fxt7QqgEuUtpewPMgfKlkg==/109951163698538626.jpg?param=320y320', title: '测试' },
                ]
            })
        } else {
            this.setState({
                musicList: localList.list
            })
        }
    }

    closePlayListDetail = () => {
        this.setState({
            showPlayListDetail: false
        })
    }

    onListItemClick = (id) => {
        const data = this.state.musicList.find(item => item.id === id)
        this.setState({
            showPlayListDetail: true,
            playListItem: data
        })
    }

    render() {
        const customBar = useSelector(state => state.system.customBar)

        return <View className='main-page'>
            <ScrollView scrollY className='main-content'>
                <TitleBar isBack title='喜欢的歌单' black />
                <View className='play-list favorite-music-list' style={{ padding: (customBar + 20) + 'px 50rpx 0' }}>
                    {this.state.musicList.map(item => (
                        <View className='play-list-item' key={item.id} onClick={() => this.onListItemClick(item.id)}>
                            <View className='item-cover'>
                                <View className='cover' style={{ backgroundImage: 'url("' + item.cover + '")' }} />
                                <View className='mask' style={{ backgroundImage: 'url("' + item.cover + '")' }} />
                            </View>
                            <View className='title'>{item.title}</View>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <PlayListItemDetail visible={this.state.showPlayListDetail} data={this.state.playListItem} onCloseButtonClick={this.closePlayListDetail} />
        </View>
    }

}
