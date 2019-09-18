import { View, ScrollView } from "@tarojs/components"
import Taro, { Component } from "@tarojs/taro"
import CIcon from "../cIcon/cIcon"
import './playListItemDetail.less'
import MusicBlock from "../musicBlock/musicBlock"

export default class PlayListItemDtail extends Component {

    state = {
        showPlayListItemDetail: null,
        showDetailMask: null,
        detailData: {
            title: '爱情就像一场大病，过了，就好。',
            createTime: '2019-09-21',
            author: 'Matthew Wang',
            description: '爱情就像一场大病，过了，就好。——电影《十二夜》台词所谓爱情，其实就是一场大病。这个世界，总有你不喜欢的人，也总有人不喜欢你。这都很正常。而且，无论你有多好，也无论对方有多好，都苛求彼此不得。因为，好不好是一回事，喜不喜欢是另一回事。这场大病一开始会让你浑身不舒服，但慢慢你会不药而愈，满血复活。',
            musicList: [
                { id: 1, cover: 'http://p3.music.126.net/6CB6Jsmb7k7qiJqfMY5Row==/109951164260234943.jpg?param=100y100', title: 'Counting Sheep', author: 'SAFIA', favorite: '20' },
                { id: 2, cover: 'http://p2.music.126.net/MXzI7ExXb6ru3CeW_P1HSw==/7906588115831440.jpg?param=130y130', title: 'Counting Sheep', author: 'SAFIA', favorite: '20' },
                { id: 3, cover: 'http://p2.music.126.net/MXzI7ExXb6ru3CeW_P1HSw==/7906588115831440.jpg?param=130y130', title: 'Counting Sheep', author: 'SAFIA', favorite: '20' }
            ]
        },
    }

    // eslint-disable-next-line no-unused-vars
    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.visible !== nextProps.visible && nextProps.visible === true) {
            this.onListItemClick()
        }
    }

    animationOne = Taro.createAnimation({
        transformOrigin: '50% 50%',
        duration: 500,
        timingFunction: 'ease-in-out',
        delay: 0
    })

    animationTwo = Taro.createAnimation({
        transformOrigin: '50% 50%',
        duration: 200,
        timingFunction: 'ease-in-out',
        delay: 0
    })

    onListItemClick = () => {
        this.animationOne.bottom(0).step()
        this.setState({ showPlayListItemDetail: this.animationOne.export() }, () => {
            setTimeout(() => {
                this.animationTwo.opacity(.4).step()
                this.setState({ showDetailMask: this.animationTwo.export() })
            }, 500)
        })
    }

    onCloseButtonClick = () => {
        this.animationTwo.opacity(0).step()
        this.setState({ showDetailMask: this.animationTwo.export() }, () => {
            setTimeout(() => {
                this.animationOne.bottom(-2000).step()
                this.setState({ showPlayListItemDetail: this.animationOne.export() })
            }, 200)
            this.props.onCloseButtonClick()
        })
    }

    render() {
        const cover = this.props.data !== null && this.props.data !== undefined ? this.props.data.cover : ''

        return (
            <View className='play-list-item-detail' animation={this.state.showPlayListItemDetail}>
                <View className='detail-mask' animation={this.state.showDetailMask} />
                <View className='close-button' onClick={this.onCloseButtonClick}>
                    <CIcon icon='wrong' />
                </View>
                <View className={`detail-content-block ${this.props.visible ? 'show' : 'hide'}`}>
                    <View className='detail-content'>
                        <View className='detail-cover' style={{ backgroundImage: 'url("' + cover + '")' }} />
                        <ScrollView className='content-block' scrollY>
                            <View className='content-title'>{this.state.detailData.title}</View>
                            <View className='content-info'>
                                <View><CIcon icon='account' />{this.state.detailData.author}</View>
                                <View><CIcon icon='clock' />{this.state.detailData.createTime}</View>
                            </View>
                            <View className='content-description'>{this.state.detailData.description}</View>
                            <View className='song-list'>
                                <MusicBlock data={this.state.detailData.musicList} />
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }

}
