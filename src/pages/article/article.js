import { ScrollView, View } from "@tarojs/components"
import Taro, { Component } from '@tarojs/taro'
import TitleBar from "../../components/titleBar/titleBar";
import TopCover from "../../components/topCover/topCover";

const ArticleCover = 'https://www.getatny.com/wp-content/uploads/2019/09/article-cover.jpg'

export default class Article extends Component {

    render() {
        return <View className='article-page'>
            <ScrollView scrollY className='main-content'>
                <TitleBar />
                <TopCover cover={ArticleCover} logo />
            </ScrollView>
        </View>
    }

}
