import { ScrollView, View } from "@tarojs/components"
import Taro, { Component } from '@tarojs/taro'
import TitleBar from "../../components/titleBar/titleBar";
import TopCover from "../../components/topCover/topCover";
import MusicCover from "../../static/img/music-cover.jpg";

export default class Article extends Component {

    render() {
        return <View className='article-page'>
            <ScrollView scrollY className='main-content'>
                <TitleBar />
                <TopCover cover='https://www.getatny.com/wp-content/uploads/2019/09/article-cover.jpg' logo />
            </ScrollView>
        </View>
    }

}
