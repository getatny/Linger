import { Image, ScrollView, View } from "@tarojs/components"
import Taro, { Component } from '@tarojs/taro'
import TitleBar from "../../components/titleBar/titleBar";
import TopCover from "../../components/topCover/topCover";
import MusicCover from "../../static/img/music-cover.jpg";
import defaultAvatar from '../../static/img/default-avatar.png'
import './mine.less'

export default class Article extends Component {

    render() {
        return <View className='mine-page'>
            <ScrollView scrollY className='main-content'>
                <TitleBar />
                <TopCover cover='https://www.getatny.com/wp-content/uploads/2019/09/mine-cover.jpg'>
                    <View className='user-profile'>
                        <Image className='avatar' mode='aspectFit' src={defaultAvatar} />
                        <View className='username'>未登录</View>
                    </View>
                </TopCover>

            </ScrollView>
        </View>
    }

}
