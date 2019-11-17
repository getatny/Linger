import { ScrollView, Swiper, SwiperItem, View } from "@tarojs/components"
import Taro, { Component } from '@tarojs/taro'
import TitleBar from "../../components/titleBar/titleBar";
import TopCover from "../../components/topCover/topCover";

const ArticleCover = 'https://www.getatny.com/wp-content/uploads/2019/09/article-cover.jpg'

export default class Article extends Component {

    state = {
        trendCategories: [
            { name: '情感' },
        ]
    }

    render() {
        return <View className='article-page'>
            <ScrollView scrollY className='main-content'>
                <TitleBar />
                <TopCover cover={ArticleCover} logo />
                <Swiper className='trend-categories'>
                    {this.state.trendCategories.map(category => (
                        <SwiperItem>
                            <View>{category.name}</View>
                        </SwiperItem>
                    ))}
                </Swiper>
            </ScrollView>
        </View>
    }

}
