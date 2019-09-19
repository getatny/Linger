import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import TitleBar from "../../components/titleBar/titleBar"
import TopCover from "../../components/topCover/topCover"
import Title from "../../components/title/title"
import PlayList from "../../components/playList/playList"
import MusicCover from '../../static/img/music-cover.jpg'
import PlayListItemDtail from "../../components/playList/playListItemDetail"
import MusicBlock from "../../components/musicBlock/musicBlock"
import './music.less'

class Music extends Component {

    state = {
        showPlayListDetail: false,
        playListItem: null,
        playList: [
            { id: 1, cover: 'http://p1.music.126.net/2MsstS-M9w5-li0aRy3sUQ==/1380986606815861.jpg?param=320y320', title: '测试' },
            { id: 2, cover: 'http://p1.music.126.net/x44v5IkLN30gWgUYWYivbg==/109951164000997664.jpg?param=320y320', title: '测试' },
            { id: 3, cover: 'http://p2.music.126.net/fxt7QqgEuUtpewPMgfKlkg==/109951163698538626.jpg?param=320y320', title: '测试' },
            { id: 4, cover: 'http://p1.music.126.net/2MsstS-M9w5-li0aRy3sUQ==/1380986606815861.jpg?param=320y320', title: '测试' },
            { id: 5, cover: 'http://p1.music.126.net/2MsstS-M9w5-li0aRy3sUQ==/1380986606815861.jpg?param=320y320', title: '测试' }
        ],
        musicRecommend: [
            { id: 1, cover: 'http://p3.music.126.net/6CB6Jsmb7k7qiJqfMY5Row==/109951164260234943.jpg?param=100y100', title: 'Counting Sheep', author: 'SAFIA', favorite: '20' },
            { id: 2, cover: 'http://p2.music.126.net/MXzI7ExXb6ru3CeW_P1HSw==/7906588115831440.jpg?param=130y130', title: 'Counting Sheep', author: 'SAFIA', favorite: '20' }
        ]
    }

    onListItemClick = (data) => {
        this.setState({ showPlayListDetail: true, playListItem: data })
    }

    closePlayListDetail = () => {
        this.setState({ showPlayListDetail: false })
    }

    render() {
        return (
            <View className='music-page'>
                <ScrollView scrollY className='main-content'>
                    <TitleBar />
                    <TopCover cover='https://www.getatny.com/wp-content/uploads/2019/09/music-cover.jpg' logo />
                    <Title>一周歌单</Title>
                    <PlayList onListItemClick={this.onListItemClick} data={this.state.playList} />
                    <Title spec>单曲推荐</Title>
                    <MusicBlock data={this.state.musicRecommend} />
                </ScrollView>
                <PlayListItemDtail visible={this.state.showPlayListDetail} data={this.state.playListItem} onCloseButtonClick={this.closePlayListDetail} />
            </View>
        )
    }
}

export default Music
